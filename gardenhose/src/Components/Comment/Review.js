import { updateReview } from "../../util/helpers";
import ReviewForm from "./ReviewForm";

const Review = ({ 
    review, 
    replies,
    currentUserId, 
    deleteReview,
    updateReview, 
    activeReview,
    addReview, 
    setActiveReview,
    parentId = null,
}) => {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(review.createdAt) > fiveMinutes;
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === review.userId && !timePassed;
    const canDelete = currentUserId === review.userId && !timePassed;
    const createAt = new Date(review.createdAt).toLocaleDateString();
    const isReplying = activeReview && activeReview.type === 'replying' && activeReview.id === review.id
    const isEditing = activeReview && activeReview.type === 'editing' && activeReview.id === review.id
    const replyId = parentId ? parentId : review.id
    return (
        <div className="review">
            <div className="review-image-container">
                <img scr="user-icon.png"/>
            </div>
            <div className="review-right-part">
                <div className="review-content">
                    <div className="review-author">{review.username}</div>
                    <div>{createdAt}</div>
                </div>
                {!isEditing && <div className="review-text">{review.body}</div>}
                {isEditing && (
                    <ReviewForm 
                    submitLabel="Update" 
                    hasCancelButton initialText={review.body} 
                    handleSubmit={(text) => updateReview(text, review.id)} 
                    handleCancel={() => setActiveReview}
                    />
                )}
                <div className="review-actions">
                    {canReply && <div className="review-action" onClick={() => setActiveReview({id:review.id, type: "replying" })}>Reply</div>}
                    {canEdit && <div className="review-action" onClick={() => setActiveReview({id:review.id, type: "editting" })}>Edit</div>}
                    {canDelete && <div className="review-action" onClick={() => deleteReview(review.id)}>Delete</div>}
                </div>
                {isReplying && (
                    <ReviewForm 
                      submitLabel="Reply" 
                      handleSubmit={(text) => addReview(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Review 
                              review={reply} 
                              key={reply.id} 
                              replies={[]} 
                              currentUserId={currentUserId}
                              deleteReview={deleteReview}
                              updateReview={updateReview}
                              activeReview={activeReview}
                              setActiveReview={setActiveReview}
                              addReview={addReview}
                              parentId={review.id} 
                            />
                        ))}
                    </div>    
                )}
            </div>
        </div>
    )
};

export default Review;

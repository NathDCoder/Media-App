import { useEffect, useState } from "react";
import { 
    getReviews as getReviewsApi, 
    createReview as createReviewApi, 
    deleteReview as deleteReviewApi,
    updateReview as updateReviewApi
} from "../../util/helpers";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { createReview } from "../../util/helpers";

const Reviews = ({ currentUserId }) => {
    const [backendReviews, setBackendReviews] = useState([])
    const [activeReview, setActiveReview] = useState(null)
    const rootReviews = backendReviews.filter((backendReview) => backendReview.parentId === null);
    const getReplies = reviewId => {
        return backendReviews.filter(backendReview => backendReview.parentId === reviewId).sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createAt).getTime());
    };
    const addReview = (text, parentId) => {
        console.log("addReview", text, parentId);
        createReview(text, parentId).then(review => {
            setBackendReviews([review, ...backendReviews]);
            setActiveReview(null); 
        });
    };
    const deleteReview = (reviewId) => {
        if (window.confirm('Are you want to delete comment?')) {
            deleteReviewApi(reviewId).then(() => {
                const updatedBackendReviews = backendReviews.filter(
                    (backendReview) => backendReview.id !== reviewId);
                setBackendReviews(updatedBackendReviews)
                setActiveComment(null);
            });
        }
    };
    const updateReview = (text, reviewId) => {
        updateReviewApi(text, reviewId).then(() => {
            const updatedBackendReviews = backendReviews.map(backendReview => {
                if (backendReview.id === reviewId) {
                    return { ...backendReview, body: text};
                }
                return backendReview;
            })
            setBackendReviews(updatedBackendReviews);
        })
    }

    useEffect(() => {
        getReviewsApi().then(data => {
            setBackendReviews(data);
        })
    }, [])

    return (
        <div className="reviews">
            <h3 className="reviews-title">Reviews</h3>
            <div className="review-form-title">Write review</div>
            <ReviewForm submitLabel="Write" handleSubmit="addReview"/>
            <div className="reviews-container">
                {rootReviews.map(rootReview => (
                    <Review 
                      key={rootReview.id} 
                      review={rootReview} 
                      replies={getReplies(rootReview.id)}
                      currentUserId={currentUserId}
                      deleteReview={deleteReview}
                      activeReview={activeReview}
                      setActiveReview={setActiveReview}
                      addReview={addReview}
                      parentId={review.id}
                    />
                ))}
            </div>
        </div>
    ); 
};


export default Reviews;

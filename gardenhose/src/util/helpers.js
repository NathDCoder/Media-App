export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}

export const getReviews = async () => {
  return [
      {
          id: "1",
          body: "",
          username: "",
          userId: "",
          parentId: null,
          createAt: "",
      },
      {
          id: "2",
          body: "",
          username: "",
          userId: "",
          parentId: null,
          createAt: "",
      },
      {
          id: "3",
          body: "",
          username: "",
          userId: "",
          parentId: null,
          createAt: "",
      },
      {
          id: "4",
          body: "",
          username: "",
          userId: "",
          parentId: null,
          createAt: "",
      },
  ];
};

export const createReview = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substring(2, 9),
    body: text,
    userId: "1",
    username: "",
    createAt: new Date().toISOString(),
  };
};

export const updateReview = async (text) => {
  return { text };
};

// export const deleteReview = "" => {
//   return {}
// };


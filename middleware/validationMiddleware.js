const validateAuthorId = (req, res, next) => {
    // Your validation logic for author ID
    next();
  };
  
  module.exports = { validateAuthorId };
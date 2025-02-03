function authorizeRoles(...roles) {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Accès refusé : rôle insuffisant.' });
      }
      next();
    };
  }
  
  module.exports = { authorizeRoles };
  
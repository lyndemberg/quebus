const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes');

const { JWT_SECRET } = process.env;

module.exports = () => {
  const authorization = (roles) => (req, res, next) => {
    roles = typeof roles === 'string' ? [roles] : roles;

    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
      return res.status(httpStatus.UNAUTHORIZED)
        .json({
          message: 'No token provided', status: httpStatus.UNAUTHORIZED,
        });
    }

    const parts = authHeaders.split(' ');

    if (parts.length !== 2) {
      return res.status(httpStatus.UNAUTHORIZED)
        .json({
          message: 'Token error', status: httpStatus.UNAUTHORIZED,
        });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(httpStatus.UNAUTHORIZED)
        .json({
          message: 'Token malformatted', status: httpStatus.UNAUTHORIZED,
        });
    }

    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(httpStatus.UNAUTHORIZED)
          .json({
            message: 'Token invalid', status: httpStatus.UNAUTHORIZED,
          });
      }
      req.user = decoded;
      req.user.roles = typeof req.user.roles === 'string' ? req.user.roles = [req.user.roles] : req.user.roles;

      const rolesFilter = roles.filter((r) => req.user.roles.includes(r));

      if (rolesFilter.length === 0) {
        return res.status(httpStatus.UNAUTHORIZED)
          .json({
            message: 'No permission', status: httpStatus.UNAUTHORIZED,
          });
      }
    });
    return next();
  };

  return authorization;
};

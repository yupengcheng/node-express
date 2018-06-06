const Sequelize = require('sequelize');
const sequelize = require('./../../config/index').SEQUELIZE;

const leaveWell = sequelize.define('leave_control', {
  leaveTitle: {
    type: Sequelize.STRING,
    field: 'leave_title'
  },
  leaveUser: {
    type: Sequelize.STRING,
    field: 'leave_user'
  },
  leaveTime: {
    type: Sequelize.INTEGER,
    field: 'leave_time'
  },
  leaveContent: {
    type: Sequelize.STRING,
    field: 'leave_content'
  }
}, {
  timestamps: false,
  freezeTableName: true
})

exports.addLeave = (leaveTitle, leaveUser, leaveTime, leaveContent) => {
  return leaveWell.create({
    leaveTitle: leaveTitle,
    leaveUser: leaveUser,
    leaveTime: leaveTime,
    leaveContent: leaveContent
  })
}

exports.allLeave = () => {
  return leaveWell.findAll()
}

exports.viewDetail = (id) => {
  return leaveWell.findAll({
    where: {
      id: id
    }
  })
}

exports.deleteLeave = (id) => {
  return leaveWell.destroy({
    where: {
      id: id
    }
  })
}

// offset 代表初始值
// limit 分页数量
exports.leaveWellPage = (pageSize, pageNo) => {
  return leaveWell.findAndCountAll({
    offset: pageNo,
    limit: pageSize
  })
}
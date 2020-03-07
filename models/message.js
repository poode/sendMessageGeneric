'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    'from#to#topic': {
      allowNull: false,
      type: DataTypes.STRING
    },
    chat: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    indexes:[
     {
       unique: false,
       fields:['from#to#topic']
     }
    ]
  });
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};
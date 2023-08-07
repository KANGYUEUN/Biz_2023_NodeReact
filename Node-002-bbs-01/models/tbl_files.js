import Sequelize from "sequelize";

export default function (sequelize, DataTypes) {
  return sequelize.define(
    "tbl_files",
    {
      f_seq: {
        autoIncrement: true,
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      f_bseq: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "tbl_bbs",
          key: "b_seq",
        },
      },
      f_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      f_origin_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_files",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "f_seq" }],
        },
        {
          name: "f_bbs",
          using: "BTREE",
          fields: [{ name: "f_bseq" }],
        },
      ],
    }
  );
}

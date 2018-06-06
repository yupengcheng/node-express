const Sequelize = require('sequelize');
const sequelize = require('./../../config/index').SEQUELIZE;

const article = sequelize.define('article_control', {
  articleTitle: {
    type: Sequelize.STRING,
    field: 'article_title'
  },
  articleMin: {
    type: Sequelize.STRING,
    field: 'article_min'
  },
  articleContent: {
    type: Sequelize.STRING,
    field: 'article_content'
  },
  praise: {
    type: Sequelize.INTEGER
  },
  createTime: {
    type: Sequelize.INTEGER,
    field: 'create_time'
  },
  readArticleNumber: {
    type: Sequelize.INTEGER,
    field: 'read_article_number'
  },
  articleCreateUser: {
    type: Sequelize.STRING,
    field: 'article_create_user'
  },
  articleComments: {
    type: Sequelize.INTEGER,
    field: 'article_comments'
  },
  articleTag: {
    type: Sequelize.STRING,
    field: 'article_tag'
  },
  articleClassification: {
    type: Sequelize.INTEGER,
    field: 'article_classification'
  },
  state: {
    type: Sequelize.STRING,
    field: 'article_state'
  },
  draft: {
    type: Sequelize.STRING,
    field: 'article_draft'
  }
}, {
  timestamps: false,
  freezeTableName: true
});

exports.addArticle = function (articleTitle, articleMin, articleContent, createTime, articleTag, articleClassification, state, draft, articleCreateUser) {
  return article.create({
    articleTitle: articleTitle,
    articleMin: articleMin,
    articleContent: articleContent,
    createTime: createTime,
    articleTag: articleTag,
    articleClassification: articleClassification,
    state: state,
    draft: draft,
    articleCreateUser: articleCreateUser
  })
}

exports.selectArticle = function (articleTitle) {
  return article.findAll({
    where: {
      articleTitle: articleTitle
    }
  })
}

exports.selectArticlePage = function (state, submit, tag, classify, keyWord, pageNo, pageSize) {
  return article.findAndCountAll({
    where: {
      state: {
        $like: `%${state}%`
      },
      draft: {
        $like: `%${submit}%`
      },
      articleTag: {
        $like: `%${tag}%`
      },
      articleClassification: {
        $like: `%${classify}%`
      },
      articleTitle: {
        $like: `%${keyWord}%`
      }
    },
    offset: pageNo,
    limit: pageSize
  })
}

exports.selectArticle = function (id) {
  return article.findAll({
    where: {
      id: id
    }
  })
}

exports.deleteArticle = function (id) {
  return article.destroy({
    where: {
      id: id
    }
  })
}

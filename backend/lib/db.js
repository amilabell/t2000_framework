const path = require("path");

//initialize database:
const Sequelize = require("sequelize");
const sequelize = new Sequelize('framework', '', '', {
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'db.sqlite'),
    operatorsAliases: false,
    define: {
        underscored: true
    },
    omitNull: true
});


//models:
const notNull = sequelize_type => ({ type: sequelize_type, allowNull: false });

const Country = sequelize.define('country', {
  c_code: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  hasDims: {
      type: Sequelize.BOOLEAN
  }
});

const Dimension = sequelize.define('dimension', {
  d_code: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
});

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
});

const Preference = sequelize.define('preference', {
  text: {
    type: Sequelize.STRING
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  category: {
      type: Sequelize.STRING,
      references: {
         model: Category,
         key: 'id',
       }
  }
});

const HasScore = sequelize.define('hasScore', {
  c_code: {
      type: Sequelize.STRING,
      references: {
         model: Country,
         key: 'c_code',
         //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
       },
      primaryKey: true
  },
  d_code: {
      type: Sequelize.STRING,
      /*references: {
         model: Dimension,
         key: 'd_code',
       },*/
       primaryKey: true
  },
  score: {
    type: Sequelize.INTEGER
  },
});

const HasPref = sequelize.define('hasPref', {
  high: {
    type: Sequelize.BOOLEAN
  },
  d_code: {
      type: Sequelize.STRING,
      references: {
         model: Dimension,
         key: 'd_code',
       }
  },
  pref_id: {
      type: Sequelize.INTEGER,
      references: {
         model: Preference,
         key: 'id',
       }
  }
});


//relations:


//queries:

module.exports = {
    //initialisation of data
    init: async function(force = false) {
        await sequelize.sync({
            force
        });
    },
    createCountry: async function(countryData) {
        const country = await Country.create(countryData);
        return country.c_code;
    },
    createDim: async function(dimData) {
        const dimension = await Dimension.create(dimData);
        return dimension.d_code;
    },
    createScores: async function(scoreData) {
    const scores = await HasScore.create(scoreData);
        return scores.score;
    },
    createCategories: async function(categories) {
        const hasScore = await Category.create(categories);
        return hasScore.name;
    },
    createPrefs: async function(prefs) {
        const preference = await Preference.create(prefs);
        return preference.text;
    },
    createPrefList: async function(prefList) {
        const hasPref = await HasPref.create(prefList);
        return hasPref.high;
    },
    
    //country queries
    getCountries: async function(){
        const countries = Country.findAll({});
        console.log("Test");
        return countries;
    },
    getCountry: async function(code){
        const country = Country.findAll({
            where: {
                c_code: code
            }
        });
        return country;
    },
    
    //score queries
    getScores: async function(){
        const scores = HasScore.findAll({});
        return scores;
    },
    getSpecScore: async function(code, dim){
        const result = HasScore.findAll({
            attributes: ['score'],
            where: {
                c_code: code,
                d_code: dim
            }
        });
        return result;
    },
    getCountryScore: async function(code){
        const result = HasScore.findAll({
            attributes: ['score', 'd_code'],
            where: {
                c_code: code
            }
        });
        return result;
    },
    
    //preference queries
    getPrefs: async function(){
        const prefs = Preference.findAll({});
        return prefs;
    },
    getHasPrefs: async function(){
        const prefs = HasPref.findAll({});
        return prefs;
    },
    getSpecPrefs: async function(dim, pole){
        const result = HasPref.findAll({
            attributes: ['pref_id'],
            where: {
                d_code: dim,
                high: pole
            },
        });
        return result;
    },
    getPrefById: async function(id){
        const pref = Preference.find({
            attributes: ['text', 'category'],
            where: {
                id: id
            },
        });
        return pref;
    },
    
    //category queries
    getCats: async function(){
        const result = Category.findAll({});
        return result;
    },
    
    //dimension queries
    getDims: async function(){
        const result = Dimension.findAll({
            attributes: ['d_code']
        });
        return result;
    }
    
};
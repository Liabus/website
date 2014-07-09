/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res){
		res.view({
			homepage: true
		});
	},
	contact: function(req, res){
		res.view();
	},
	projects: function(req, res){
		res.view();
	},

	postContact: function(req, res){
		
	}
};

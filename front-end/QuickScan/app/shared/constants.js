"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = {
	actions: {
		author: keyMirror({
			INITIALIZE_AUTHORS: null,
			CREATE_AUTHOR: null,
			UPDATE_AUTHOR: null,
			DELETE_AUTHOR: null
		}),
		category: keyMirror({
			INITIALIZE_CATEGORIES: null,
			CATEGORIES_HAVING_QUESTION: null,
			STORE_SELECTED_CATEGORIES: null,
			LOAD_SELECTED_CATEGORIES: null
		}),
		question: keyMirror({
			INITIALIZE_QUESTIONS: null,
			LOAD_QUESTIONS_BY_CATEGORYID: null,
			CREATE_QUESTION: null,
			UPDATE_QUESTION: null,
			DELETE_QUESTION: null
		}),
		cart: keyMirror({
			LOAD_CART: null
		})
	},
	categories: keyMirror({
		csharp: null,
		aspnet: null,
		aspnetmvc: null,
		aspnetcore: null,
		webapi: null,
		adonet: null,
		ef: null,
		silverlight: null,
		javascript: null,
		jquery: null
	}),
	constants: {
		questionType: keyMirror({
			SINGLE_SELECT: null,
			MULTI_SELECT: null
		}),
		questionLevel: keyMirror({
			BEGINNER: null,
			INTERMEDIATE: null,
			EXPERT: null
		}),
		events: keyMirror({
			CHANGE: null
		}),
		questionTarget: keyMirror({
			CONFIGURE_MANUAL_EXAM: null,
			CONFIGURE_RANDOM_EXAM: null,
			VIEW_PDF: null
		})
	}
};
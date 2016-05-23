/* globals Backbone */

(function() {
  'use strict';

  // limit pollution of global namespace by creating single global object where everything is stored
  window.app = window.app || {
    Models: {},
    Views: {},
    Collections: {}
  };

  window.app.Models.OrderItem = Backbone.Model.extend({
    defaults: {
      item: '',
      qty: 0,
      price: 0
    }
  });
})();

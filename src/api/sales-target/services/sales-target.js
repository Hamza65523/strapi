'use strict';

/**
 * sales-target service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sales-target.sales-target');

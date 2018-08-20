"use strict";

Date.prototype.laterThan = function (date) {
    return this.getTime() > date.getTime();
};

Date.prototype.addMinutes = function (minutes) {
    return new Date(this.getTime() + minutes * 60000);
};
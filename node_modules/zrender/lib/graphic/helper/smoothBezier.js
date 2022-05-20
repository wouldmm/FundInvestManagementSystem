"use strict";
exports.__esModule = true;
var vector_1 = require("../../core/vector");
function smoothBezier(points, smooth, isLoop, constraint) {
    var cps = [];
    var v = [];
    var v1 = [];
    var v2 = [];
    var prevPoint;
    var nextPoint;
    var min;
    var max;
    if (constraint) {
        min = [Infinity, Infinity];
        max = [-Infinity, -Infinity];
        for (var i = 0, len = points.length; i < len; i++) {
            vector_1.min(min, min, points[i]);
            vector_1.max(max, max, points[i]);
        }
        vector_1.min(min, min, constraint[0]);
        vector_1.max(max, max, constraint[1]);
    }
    for (var i = 0, len = points.length; i < len; i++) {
        var point = points[i];
        if (isLoop) {
            prevPoint = points[i ? i - 1 : len - 1];
            nextPoint = points[(i + 1) % len];
        }
        else {
            if (i === 0 || i === len - 1) {
                cps.push(vector_1.clone(points[i]));
                continue;
            }
            else {
                prevPoint = points[i - 1];
                nextPoint = points[i + 1];
            }
        }
        vector_1.sub(v, nextPoint, prevPoint);
        vector_1.scale(v, v, smooth);
        var d0 = vector_1.distance(point, prevPoint);
        var d1 = vector_1.distance(point, nextPoint);
        var sum = d0 + d1;
        if (sum !== 0) {
            d0 /= sum;
            d1 /= sum;
        }
        vector_1.scale(v1, v, -d0);
        vector_1.scale(v2, v, d1);
        var cp0 = vector_1.add([], point, v1);
        var cp1 = vector_1.add([], point, v2);
        if (constraint) {
            vector_1.max(cp0, cp0, min);
            vector_1.min(cp0, cp0, max);
            vector_1.max(cp1, cp1, min);
            vector_1.min(cp1, cp1, max);
        }
        cps.push(cp0);
        cps.push(cp1);
    }
    if (isLoop) {
        cps.push(cps.shift());
    }
    return cps;
}
exports["default"] = smoothBezier;

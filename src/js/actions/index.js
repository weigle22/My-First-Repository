var ActionTypes = require('./types');

var Actions = {

    addRoute: () => {
        return {
            type: ActionTypes.ADD_ROUTE,
        }
    },

    addRouteRequested: () => {
        return {
            type: ActionTypes.ADD_ROUTE_REQUESTED,
        }
    },

    removeRoute: (id) => {
        return {
            type: ActionTypes.REMOVE_ROUTE,
            id
        }
    },

    removeRouteRequested: (id) => {
        return {
            type: ActionTypes.REMOVE_ROUTE_REQUESTED,
            id
        }
    },

    changeActiveRoute: (id) => {
        return {
            type: ActionTypes.CHANGE_ACTIVE_ROUTE,
            id
        }
    },

    changeRouteName: (routeID, newName) => {
        return {
            type: ActionTypes.CHANGE_ROUTE_NAME,
            routeID,
            newName
        }
    },

    addWayPointToRoute: (tgtWayPoint, newWayPoint) => {
        return {
            type: ActionTypes.ADD_WAY_POINT_TO_ROUTE,
            tgtWayPoint,
            newWayPoint
        }
    },

    removeWayPointFromRoute: (wayPointID) => {
        return {
            type: ActionTypes.REMOVE_WAY_POINT_FROM_ROUTE,
            wayPointID
        }
    },

    addWayPoint: (id) => {
        return {
            type: ActionTypes.ADD_WAY_POINT,
            id
        }
    },

    addWayPointRequested: (id) => {
        return {
            type: ActionTypes.ADD_WAY_POINT_REQUESTED,
            id
        }
    },

    removeWayPoint: (id) => {
        return {
            type: ActionTypes.REMOVE_WAY_POINT,
            id
        }
    },

    removeWayPointRequested: (id) => {
        return {
            type: ActionTypes.REMOVE_WAY_POINT_REQUESTED,
            id
        }
    }

};

module.exports = Actions;
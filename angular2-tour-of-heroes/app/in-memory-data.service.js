"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Mr. Narco' },
            { id: 13, name: 'Mr. Bombasto' },
            { id: 14, name: 'Mr. Celeritas' },
            { id: 15, name: 'Mr. Magneta' },
            { id: 16, name: 'Mr. RubberMan' },
            { id: 17, name: 'Mr. Dynama' },
            { id: 18, name: 'Mr. Dr IQ' },
            { id: 19, name: 'Mr. Magma' },
            { id: 20, name: 'Mr. Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
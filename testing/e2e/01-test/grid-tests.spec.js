var gridTestUtils = require('../../gridTestUtils.js');
var gridId = browser.params.test1.gridId;

describe('first grid on the page, filtered by male by default', function () {
    //gridTestUtils.firefoxReload();

    it('grid should have eight visible columns', function () {
        gridTestUtils.expectHeaderColumnCount(gridId, 8);
    });

    it('filter on 4 columns, filter with greater than/less than on one, one with no filter, then one with one filter', function () {
        gridTestUtils.expectFilterBoxInColumn(gridId, 0, 1);
        gridTestUtils.expectFilterSelectInColumn(gridId, 1, 1);
        gridTestUtils.expectFilterBoxInColumn(gridId, 2, 0);
        gridTestUtils.expectFilterBoxInColumn(gridId, 3, 1);
        gridTestUtils.expectFilterBoxInColumn(gridId, 4, 1);
        gridTestUtils.expectFilterBoxInColumn(gridId, 5, 2);
        gridTestUtils.expectFilterBoxInColumn(gridId, 6, 1);
    });

    it('third row should be Hatfield Hudson - will be Terry Clay if filtering broken', function () {
        gridTestUtils.expectCellValueMatch(gridId, 2, 0, 'Hatfield Hudson');
    });

    it('cancel filter on gender column and on date column, should now see Bishop Carr in third row', function () {
        gridTestUtils.cancelFilterInColumn(gridId, 1)
            .then(function () {
                return gridTestUtils.cancelFilterInColumn(gridId, 6);
            })
            .then(function () {
                gridTestUtils.expectCellValueMatch(gridId, 2, 0, 'Bishop Carr');
            });
    });

    it('filter on email column, should automatically do "ends with"', function () {
        gridTestUtils.cancelFilterInColumn(gridId, 1)
            .then(function () {
                return gridTestUtils.cancelFilterInColumn(gridId, 6);
            })
            .then(function () {
                return gridTestUtils.enterFilterInColumn(gridId, 3, 'digirang.com');
            })
            .then(function () {
                gridTestUtils.expectRowCount(gridId, 2);
            });
    });

    it('a test can fail', function () {
        expect(false).toBe(true);
    });

});

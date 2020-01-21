const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const { mergeSort } = require( "./merge-sort" );

describe( "Merge Sort", () => {
  const arr = {
    sorted: [ 0, 1, 3, 4, 8, 9, 10, 66 ],
    unsorted: [ 10, 4, 8, 3, 66, 1, 0, 9 ]
  };

  it( "Should not change sorted array", () => {
    assert.deepEqual( mergeSort( arr.sorted ), arr.sorted, `Arrays are not sorted identically` );
  } );

  it( "Should sort unsorted array", () => {
    assert.deepEqual( mergeSort( arr.unsorted, "asc" ), arr.sorted, `Arrays are not sorted identically` );
  } );
} );

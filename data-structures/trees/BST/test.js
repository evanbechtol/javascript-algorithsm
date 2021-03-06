const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const BST = require( "./bst" );
const TreeNode = require( "../tree-node" );
const util = require( "../../../util" );

describe( "BST", () => {
  const BstInstance = new BST();

  describe( "Initialization", () => {
    it( "Create instance of BST class", () => {
      assert.isDefined( BstInstance, "BstInstance is undefined" );
    } );

    it( "Should have property 'tree'", () => {
      assert.isNotNull( BstInstance.tree, "Tree is null" );
    } );

    it( "Should have null root", () => {
      assert.isNull( BstInstance.tree.root, "Root is not null" );
    } );

    it( "Should have size of 0", () => {
      assert.equal( BstInstance.tree.size, 0, "Tree size is not 0" );
    } );
  } );

  describe( "Exposed methods", () => {
    it( "insert", () => {
      assert.isFunction( BstInstance.insert, "Method insert does not exist" );
    } );

    it( "delete", () => {
      assert.isFunction( BstInstance.delete, "Method delete does not exist" );
    } );

    it( "transplant", () => {
      assert.isFunction( BstInstance.transplant, "Method transplant does not exist" );
    } );

    it( "minDepth", () => {
      assert.isFunction( BstInstance.minDepth, "Method minDepth does not exist" );
    } );

    it( "maxDepth", () => {
      assert.isFunction( BstInstance.maxDepth, "Method maxDepth does not exist" );
    } );

    it( "isBalanced", () => {
      assert.isFunction( BstInstance.isBalanced, "Method isBalanced does not exist" );
    } );

    it( "inOrderWalk", () => {
      assert.isFunction( BstInstance.tree.inOrderWalk, "Method inOrderWalk does not exist" );
    } );

    it( "preOrderWalk", () => {
      assert.isFunction( BstInstance.tree.preOrderWalk, "Method preOrderWalk does not exist" );
    } );

    it( "postOrderWalk", () => {
      assert.isFunction( BstInstance.tree.postOrderWalk, "Method postOrderWalk does not exist" );
    } );

    it( "search", () => {
      assert.isFunction( BstInstance.search, "Method search does not exist" );
    } );
  } );

  describe( "Insert Nodes", () => {
    it( "Should return null for invalid node", () => {
      assert.equal( BstInstance.insert( null ), null, "Insert did not return null as expected" );
    } );

    it( "Should return node for valid node", () => {
      const key = 4;
      const data = 10;

      const node = new TreeNode( null, null, null, key, data );
      assert.deepEqual( BstInstance.insert( node ), node, "Insert did not return node as expected" );
    } );

    it( "Should update tree size", () => {
      assert.equal( BstInstance.tree.size, 1, "Tree size is not 1" );
    } );

    it( "Should make inserted node root", () => {
      assert.equal( BstInstance.tree.root.key, 4, "Root key is not 4" );
    } );

    it( "Should have all required properties", () => {
      assert.containsAllKeys( BstInstance.tree.root, [ "parent", "key", "data", "left", "right" ], "Does not contain all required keys" );
    } );

    it( "Should have null left child", () => {
      assert.isNull( BstInstance.tree.root.left, "Left child is not null" );
    } );

    it( "Should have null right child", () => {
      assert.isNull( BstInstance.tree.root.right, "Left right is not null" );
    } );

    it( "Should have null parent", () => {
      assert.isNull( BstInstance.tree.root.parent, "Parent is not null" );
    } );

    it( "Should insert node as left child of root", () => {
      const key = 2;
      const data = 8;

      const node = new TreeNode( null, null, null, key, data );
      BstInstance.insert( node );
      assert.equal( BstInstance.tree.root.left.key, key, "Insert did not place node as left child" );
    } );

    it( "Should insert node as right child of root", () => {
      const key = 6;
      const data = 7;
      const node = new TreeNode( null, null, null, key, data );

      BstInstance.insert( node );
      assert.equal( BstInstance.tree.root.right.key, key, "Insert did not place node as right child" );
    } );

    it( "Should be balanced", () => {
      assert.equal( BstInstance.isBalanced(), true, "isBalanced returned false" );
    } );

    it( "Should insert left child of 2", () => {
      const key = 1;
      const data = 5;
      const newNode = new TreeNode( null, null, null, key, data );

      BstInstance.insert( newNode );
      const node = BstInstance.tree.root.left;
      assert.equal( node.left.key, key, "Insert did not place node as left child" );
    } );
  } );

  describe( "isBalanced Method", () => {
    it( "Should be balanced", () => {
      assert.equal( BstInstance.isBalanced(), true, "isBalanced returned false" );
    } );
  } );

  describe( "In-order Walk", () => {
    it( "Should return tree in-order", () => {
      assert.deepEqual( BstInstance.tree.inOrderWalk(), [ 1, 2, 4, 6 ], "inOrderWalk incorrect" );
    } );
  } );

  describe( "Pre-order Walk", () => {
    it( "Should return tree pre-order", () => {
      assert.deepEqual( BstInstance.tree.preOrderWalk(), [ 4, 2, 1, 6 ], "preOrderWalk incorrect" );
    } );
  } );

  describe( "Post-order Walk", () => {
    it( "Should return tree post-order", () => {
      assert.deepEqual( BstInstance.tree.postOrderWalk(), [ 1, 2, 6, 4 ], "postOrderWalk incorrect" );
    } );
  } );

  describe( "Querying", () => {
    describe( "Search", () => {
      it( "Should locate the root node", () => {
        const returnedNode = BstInstance.search( 4 );
        assert.equal( returnedNode.key, 4, "Search did not return correct node" );
      } );

      it( "Should locate a left child", () => {
        const returnedNode = BstInstance.search( 1 );
        assert.equal( returnedNode.key, 1, "Search did not return correct node" );
      } );

      it( "Should locate a right child", () => {
        const returnedNode = BstInstance.search( 6 );
        assert.equal( returnedNode.key, 6, "Search did not return correct node" );
      } );

      it( "Should return null if node with key does not exist", () => {
        assert.equal( BstInstance.search( -1 ), null, "Search did not return null" );
      } );
    } );

    describe( "Minimum", () => {
      it( "Should locate minimum key in tree", () => {
        assert.equal( BstInstance.tree.minimum().key, 1, "Minimum did not return correct result" );
      } );
    } );

    describe( "Maximum", () => {
      it( "Should locate maximum key in tree", () => {
        assert.equal( BstInstance.tree.maximum().key, 6, "Maximum did not return correct result" );
      } );
    } );

    describe( "Successor", () => {
      it( "Should locate successor", () => {
        assert.equal( BstInstance.tree.successor( BstInstance.tree.root ).key, 6, "Successor did not return correct result" );
      } );
    } );

    describe( "Predecessor", () => {
      it( "Should locate predecessor", () => {
        assert.equal( BstInstance.tree.predecessor( BstInstance.tree.root ).key, 2, "Predecessor did not return correct result" );
      } );
    } );
  } );

  describe( "Delete", () => {
    it( "Should delete a left child and return it", () => {
      const nodeToDelete = BstInstance.search( 1 );
      assert.equal( BstInstance.delete( nodeToDelete ).key, 1, "Delete did not return correct node" );
    } );

    it( "Should delete a right child and return it", () => {
      const nodeToDelete = BstInstance.search( 6 );
      assert.equal( BstInstance.delete( nodeToDelete ).key, 6, "Delete did not return correct node" );
    } );

    it( "Should delete root node and return it", () => {
      const nodeToDelete = BstInstance.search( 4 );
      assert.equal( BstInstance.delete( nodeToDelete ).key, 4, "Delete did not return correct node" );
    } );

    it( "Should have updated root node", () => {
      assert.equal( BstInstance.tree.root.key, 2, "Root is incorrect" );
    } );

    it( "Should have updated tree size", () => {
      assert.equal( BstInstance.tree.size, 1, "Tree size is incorrect" );
    } );
  } );
} );

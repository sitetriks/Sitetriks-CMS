
function Node(value) {
    this.value = value;
    this.children = [];
    this.parent = null;

    this.setParentNode = function(node) {
        this.parent = node;
    }

    this.getParentNode = function() {
        return this.parent;      
    }

    this.addChild = function(node) {
        node.setParentNode(this);
        this.children[this.children.legth] = node;
    }

    this.getChildren = function() {
        return this.children;
    }

    this.removeChildren = function() {
        this.children = [];
    }
}

function Tree(data) {
    let node = new Node(data);
    this._root = node;

    this.traverseDF = function(callback) {
        (function recurse(currentNode) {
            // step 2
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                // step 3
                recurse(currentNode.children[i]);
            }
     
            // step 4
            callback(currentNode);
     
            // step 1
        })(this._root);
    }

    this.traverseBF = function(callback) {
        var queue = new Queue();
 
        queue.enqueue(this._root);
    
        currentTree = queue.dequeue();
    
        while(currentTree){
            for (var i = 0, length = currentTree.children.length; i < length; i++) {
                queue.enqueue(currentTree.children[i]);
            }
    
            callback(currentTree);
            currentTree = queue.dequeue();
        }
    }

    this.contains = function(callback, traversal) {
        traversal.call(this, callback);
    }

    this.addChild = function(data, toData, traversal) {
        var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
        this.contains(callback, traversal);
    
        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }

    this.remove = function(data, fromData, traversal) {
        var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
        var callback = function(node) {
            if (node.data === fromData) {
                parent = node;
            }
        };
    
        this.contains(callback, traversal);
    
        if (parent) {
            index = findIndex(parent.children, data);
    
            if (index === undefined) {
                throw new Error('Node to remove does not exist.');
            } else {
                childToRemove = parent.children.splice(index, 1);
            }
        } else {
            throw new Error('Parent does not exist.');
        }
    
        return childToRemove;
    }
}

function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}



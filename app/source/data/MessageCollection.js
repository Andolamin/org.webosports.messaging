enyo.kind({
    name: "MessageCollection",
    kind: "enyo.Collection",
    model: "MessageModel",
    source: "db8",
    dbKind: "com.palm.message:1"
    //best is to not store this collection... might break things. urgs.
});


mT[0][0] = origin.nested().size(sz.width, sz.height);
mT[0][0].center(sz.terraWidthMid, sz.terraHeightMid);

mT[0][0].background = mT[0][0].rect(sz.width, sz.height);
mT[0][0].background.attr({fill: '#fff'});

mT[0][0].s = {}; //s = street
mT[0][0].s[0] = mT[0][0].line(sz.widthMid - 2.5, sz.heightMid + 48, sz.widthMid - 2.5, sz.heightMid - 63).attr({stroke: '#ddd', 'stroke-width': 5});
mT[0][0].s[1] = mT[0][0].line(sz.widthMid + 22.5, sz.heightMid + 48, sz.widthMid + 22.5, sz.heightMid - 63).attr({stroke: '#ddd', 'stroke-width': 5});
mT[0][0].s[2] = mT[0][0].line(sz.widthMid - 35, sz.heightMid + 22.5, sz.widthMid + 50, sz.heightMid + 22.5).attr({stroke: '#ddd', 'stroke-width': 5});
mT[0][0].s[3] = mT[0][0].line(sz.widthMid - 35, sz.heightMid - 2.5, sz.widthMid + 50, sz.heightMid - 2.5).attr({stroke: '#ddd', 'stroke-width': 5});

mT[0][0].s[4] = mT[0][0].line(sz.widthMid - 32.5, sz.heightMid + 48, sz.widthMid - 32.5, sz.heightMid - 63).attr({stroke: '#ddd', 'stroke-width': 5});
mT[0][0].s[5] = mT[0][0].line(sz.widthMid + 47.5, sz.heightMid + 48, sz.widthMid + 47.5, sz.heightMid - 63).attr({stroke: '#ddd', 'stroke-width': 5});

mT[0][0].s[6] = mT[0][0].line(sz.widthMid - 35, sz.heightMid + 47.5, sz.widthMid + 50, sz.heightMid + 47.5).attr({stroke: '#ddd', 'stroke-width': 5});
mT[0][0].s[7] = mT[0][0].line(sz.widthMid - 35, sz.heightMid - 27.5, sz.widthMid + 50, sz.heightMid - 27.5).attr({stroke: '#ddd', 'stroke-width': 5});
mT[0][0].s[8] = mT[0][0].line(sz.widthMid - 35, sz.heightMid - 61, sz.widthMid + 47.5, sz.heightMid - 61).attr({stroke: '#ddd', 'stroke-width': 5});


mT[0][0].h = {}; //h = house
mT[0][0].h[0] = mT[0][0].rect(20,20).attr({fill: '#6ea861', x: sz.widthMid, y: sz.heightMid});
mT[0][0].h[1] = mT[0][0].rect(25,20).attr({stroke: '#555', x: sz.widthMid - 30, y: sz.heightMid});
mT[0][0].h[2] = mT[0][0].rect(20,20).attr({stroke: '#555', x: sz.widthMid, y: sz.heightMid - 25});
mT[0][0].h[3] = mT[0][0].rect(20,20).attr({stroke: '#555', x: sz.widthMid + 25, y: sz.heightMid});
mT[0][0].h[4] = mT[0][0].rect(20,20).attr({stroke: '#555', x: sz.widthMid, y: sz.heightMid + 25});
mT[0][0].h[5] = mT[0][0].rect(25,20).attr({stroke: '#555', x: sz.widthMid - 30, y: sz.heightMid - 25});
mT[0][0].h[6] = mT[0][0].rect(20,20).attr({stroke: '#555', x: sz.widthMid + 25, y: sz.heightMid - 25});
mT[0][0].h[7] = mT[0][0].rect(20,20).attr({stroke: '#555', x: sz.widthMid + 25, y: sz.heightMid + 25});
mT[0][0].h[8] = mT[0][0].rect(25,20).attr({stroke: '#555', x: sz.widthMid - 30, y: sz.heightMid + 25});
mT[0][0].h[9] = mT[0][0].rect(25,28).attr({stroke: '#555', x: sz.widthMid - 30, y: sz.heightMid - 58});
mT[0][0].h[10] = mT[0][0].rect(20,28).attr({stroke: '#555', x: sz.widthMid, y: sz.heightMid - 58});
mT[0][0].h[11] = mT[0][0].rect(20,28).attr({stroke: '#555', x: sz.widthMid + 25, y: sz.heightMid - 58});

//origin.transform({ scaleX: .4, cx: sz.terraWidth/2, scaleY: .4, cy: sz.terraHeight/2});
//mT[0][0].h[4].rotate(25);

/*
mT[0][0].originTxt = mT[0][0].text('(0,0)').attr({fill: '#fff', x: sz.widthMid + 14, y:sz.heightMid - 18});
mT[0][0].originTxt.font({ family: 'Oswald', size: 10 });
*/

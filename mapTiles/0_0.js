mT[0][0] = origin.nested().size(sz.width, sz.height);
mT[0][0].center(sz.terraWidthMid, sz.terraHeightMid);

mT[0][0].background = mT[0][0].rect(sz.width, sz.height);
mT[0][0].background.attr({fill: '#7b7'});

/*
mT[0][0].street = {};
mT[0][0].street[0] = mT[0][0].line(sz.widthMid - 4, sz.heightMid + 6, sz.widthMid - 4, sz.heightMid - 90).attr({stroke: '#000'});
mT[0][0].street[0] = mT[0][0].line(sz.widthMid - 34, sz.heightMid - 42, sz.widthMid + 24, sz.heightMid - 42).attr({stroke: '#000'});
*/

mT[0][0].house = {};
mT[0][0].house[0] = mT[0][0].rect(10,6).attr({stroke: '#000', x: sz.widthMid, y: sz.heightMid});
/*
for(var i = 0; i < 5; i++) {
	mT[0][0].house[i] = mT[0][0].rect(10,6).attr({stroke: '#000', x: sz.widthMid, y: sz.heightMid + 2 - 10*i });
}

for(var i = 10; i < 20; i++) {
	mT[0][0].house[i] = mT[0][0].rect(10,6).attr({stroke: '#000', x: sz.widthMid - 20, y: sz.heightMid - 10*i + 100 });
}
*/

//mT[0][0].house[4].rotate(25);

mT[0][0].originTxt = mT[0][0].text('(0,0)').attr({fill: '#fff', x: sz.widthMid + 14, y:sz.heightMid - 18});
mT[0][0].originTxt.font({ family: 'Oswald', size: 10 });

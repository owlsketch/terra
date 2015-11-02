mT[0][0] = origin.nested().size(sz.width, sz.height);
mT[0][0].center(sz.terraWidthMid, sz.terraHeightMid);

mT[0][0].background = mT[0][0].rect(sz.width, sz.height);
mT[0][0].background.attr({fill: '#eee'});

var pastHeight = 0, presentHeight = 0, pastWidth = 0, presentWidth = 0;

mT[0][0].s = {}; //sH = street
mT[0][0].h = {}; //h = house
for(var i = 0; i < sz.height / 25; i++) {
	//defining horizontal streets
	var ran = (Math.random() * 20) + 25 * i;
	presentHeight = ran;
	mT[0][0].h[i] = mT[0][0].rect(sz.width, presentHeight-pastHeight).attr({fill: '#6ea861', x: 0, y: pastHeight});

	mT[0][0].s[i] = mT[0][0].line(0, ran, sz.width, ran).attr({stroke: '#fff', 'stroke-width': 5});

	pastHeight = presentHeight;
}
//issue with the last row

for(var i = 0; i < sz.width / 25; i++) {
	//defining horizontal streets
	var ran = (Math.random() * 20) + 25 * i;
	mT[0][0].s[i + sz.height/25] = mT[0][0].line(ran, 0, ran, sz.height).attr({stroke: '#fff', 'stroke-width': 5});
}

/*
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
*/

//origin.transform({ scaleX: .4, cx: sz.terraWidth/2, scaleY: .4, cy: sz.terraHeight/2});
//mT[0][0].h[4].rotate(25);

/*
mT[0][0].originTxt = mT[0][0].text('(0,0)').attr({fill: '#fff', x: sz.widthMid + 14, y:sz.heightMid - 18});
mT[0][0].originTxt.font({ family: 'Oswald', size: 10 });
*/

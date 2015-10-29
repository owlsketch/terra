mT[0][0] = origin.nested().size(sz.width, sz.height);
mT[0][0].center(sz.terraWidthMid, sz.terraHeightMid);

mT[0][0].rec = {};
mT[0][0].rec.tL = mT[0][0].rect(10,10).attr({fill: '#222233'});
mT[0][0].rec.tR = mT[0][0].rect(10,10).attr({fill: '#222233', x: sz.width - 10});
mT[0][0].rec.bL = mT[0][0].rect(10,10).attr({fill: '#222233', y: sz.height - 9});
mT[0][0].rec.bR = mT[0][0].rect(10,10).attr({fill: '#222233', x: sz.width - 10, y: sz.height - 9});

mT[0][0].container = mT[0][0].circle(425).attr({stroke: '#aaaabb', fill: 'none', cx: sz.widthMid, cy: sz.heightMid });
mT[0][0].origin = mT[0][0].circle(150).attr({fill: '#222233', cx: sz.widthMid, cy: sz.heightMid });
var click = function() {
	if(this.attr('fill') === '#222233') {
		this.fill({color: '#f05'});
	}
	else {
		this.fill({color: '#222233'});
	}
};

mT[0][0].origin.on('mouseover', click);
mT[0][0].origin.on('mouseout', click);

mT[0][0].house = {};
mT[0][0].house[1] = mT[0][0].rect(10,6).attr({stroke: '#fff', x: sz.widthMid-2, y: sz.heightMid });
mT[0][0].house[2] = mT[0][0].rect(10,6).attr({stroke: '#fff', x: sz.widthMid-2, y: sz.heightMid - 10 });
mT[0][0].house[3] = mT[0][0].rect(10,6).attr({stroke: '#fff', x: sz.widthMid-2, y: sz.heightMid + 10 });
mT[0][0].house[4] = mT[0][0].rect(10,6).attr({stroke: '#fff', x: sz.widthMid, y: sz.heightMid - 20 });

mT[0][0].house[2].rotate(12.5);
mT[0][0].house[4].rotate(25);

mT[0][0].originTxt = mT[0][0].text('(0,0)').attr({fill: '#fff', x: sz.widthMid + 14, y:sz.heightMid - 18});
mT[0][0].originTxt.font({ family: 'Oswald', size: 10 });

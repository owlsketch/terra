
mT[1][-1] = origin.nested().size(sz.width, sz.height);
mT[1][-1].center(sz.terraWidthMid+sz.width, sz.terraHeightMid + sz.height);

mT[1][-1].rec = {};
mT[1][-1].rec.tL = mT[1][-1].rect(10,10).attr({fill: '#222233'});
mT[1][-1].rec.tR = mT[1][-1].rect(10,10).attr({fill: '#222233', x: sz.width - 10});
mT[1][-1].rec.bL = mT[1][-1].rect(10,10).attr({fill: '#222233', y: sz.height - 9});
mT[1][-1].rec.bR = mT[1][-1].rect(10,10).attr({fill: '#222233', x: sz.width - 10, y: sz.height - 9});

mT[1][-1].container = mT[1][-1].circle(425).attr({stroke: '#aaaabb', fill: 'none', cx: sz.widthMid, cy: sz.heightMid });
mT[1][-1].origin = mT[1][-1].circle(150).attr({fill: '#222233', cx: sz.widthMid, cy: sz.heightMid });

mT[1][-1].house = {};
mT[1][-1].house[1] = mT[1][-1].rect(10,6).attr({stroke: '#fff', x: sz.widthMid-2, y: sz.heightMid });
mT[1][-1].house[2] = mT[1][-1].rect(10,6).attr({stroke: '#fff', x: sz.widthMid-2, y: sz.heightMid - 10 });
mT[1][-1].house[3] = mT[1][-1].rect(10,6).attr({stroke: '#fff', x: sz.widthMid-2, y: sz.heightMid + 10 });
mT[1][-1].house[4] = mT[1][-1].rect(10,6).attr({stroke: '#fff', x: sz.widthMid, y: sz.heightMid - 20 });

mT[1][-1].house[2].rotate(12.5);
mT[1][-1].house[4].rotate(25);

mT[1][-1].originTxt = mT[1][-1].text('(0,0)').attr({fill: '#fff', x: sz.widthMid + 14, y:sz.heightMid - 18});
mT[1][-1].originTxt.font({ family: 'Oswald', size: 10 });

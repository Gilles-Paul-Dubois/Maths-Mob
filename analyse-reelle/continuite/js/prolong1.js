var nameSpace1 = {};
nameSpace1.xmin = -5; // adjust as needed
nameSpace1.xmax = +5; // adjust as needed
nameSpace1.ymin = -5; // adjust according max value of f
nameSpace1.ymax = +5; // adjust according min value of f
nameSpace1.board = JXG.JSXGraph.initBoard('box1', {boundingbox: [nameSpace1.xmin, nameSpace1.ymax, nameSpace1.xmax, nameSpace1.ymin], axis: true});
nameSpace1.m = 0;
nameSpace1.n = 0;
nameSpace1.sf = 1;
nameSpace1.cg = 0;
nameSpace1.ch = 0;

nameSpace1.f0 = function (x)
{
    return 1 * nameSpace1.sf;
}

nameSpace1.f1 = function (x)
{
    return x * x * nameSpace1.sf;
}
nameSpace1.f2 = function (x)
{
    return (1 - x * x) * nameSpace1.sf;
}

nameSpace1.f3 = function (x)
{
    return x * nameSpace1.sf;
}

nameSpace1.f4 = function (x)
{
    return Math.sin(x * (Math.PI / 2)) * nameSpace1.sf;
}

nameSpace1.g0 = function (x)
{
    return +1;
}

nameSpace1.g1 = function (x)
{
    return x + 2;
}

nameSpace1.g2 = function (x)
{
    return 1 + (x + 1) * (x + 1);
}

nameSpace1.g3 = function (x)
{
    return -x;
}

nameSpace1.g4 = function (x)
{
    return -Math.sin(x * Math.PI / 2);
}

nameSpace1.fstart = function ()
{
    var result;
    switch (nameSpace1.m)
    {
        case 0:
            result = 1;
            break;
        case 1:
            result = 1;
            break;
        case 2:
            result = 0;
            break;
        case 3:
            result = -1;
            break
        case 4:
            result = -1;
            break
    }
    if (nameSpace1.sf == -1)
        return -result;
    else
        return result;
}

nameSpace1.h0 = function (x)
{
    return +1;
}

nameSpace1.h1 = function (x)
{
    return x ;
}

nameSpace1.h2 = function (x)
{
    return 1 - (x - 1) * (x - 1);
}

nameSpace1.h3 = function (x)
{
    return 2-x;
}

nameSpace1.h4 = function (x)
{
    return Math.sin(x * Math.PI / 2);
}



nameSpace1.farrival = function ()
{
    var result;
    switch (nameSpace1.m)
    {
        case 0:
            result = 1;
            break;
        case 1:
            result = 1;
            break;
        case 2:
            result = 0;
            break;
        case 3:
            result = 1;
            break
        case 4:
            result = 1;
            break
    }
    if (nameSpace1.sf == -1)
        return -result;
    else
        return result;
}

nameSpace1.f = function (x)
{

    switch (nameSpace1.m)
    {
        case 0:
            return nameSpace1.f0(x);
        case 1:
            return nameSpace1.f1(x);
        case 2:
            return nameSpace1.f2(x);
        case 3:
            return nameSpace1.f3(x);
        case 4:
            return nameSpace1.f4(x);
    }
}


nameSpace1.choicef = function ()
{
    if (Math.random() < 0.5)
        nameSpace1.sf = 1;
    else
        nameSpace1.sf = -1;
    nameSpace1.m = (nameSpace1.m + 1) % 5;
    nameSpace1.Paint();
}

nameSpace1.random = function ()
{
    x = Math.random()
    if (x < 0.2)
        return 0;
    if (x < 0.4)
        return 1;
    if (x < 0.6)
        return 2;
    if (x < 0.8)
        return 3;
    return 4;

}
nameSpace1.g = function (x)
{
    var cg = nameSpace1.cg;
    var fs = nameSpace1.fstart();
    switch (fs)
    {
        case 1:
        {
            switch (cg)
            {
                case 0:
                    return nameSpace1.g0(x);
                case 1:
                    return nameSpace1.g1(x);
                case 2:
                    return nameSpace1.g2(x);
                case 3:
                    return nameSpace1.g3(x);
                case 4:
                    return nameSpace1.g4(x);

            }

        }
        case -1:
        {
            switch (cg)
            {
                case 0:
                    return -nameSpace1.g0(x);
                case 1:
                    return -nameSpace1.g1(x);
                case 2:
                    return -nameSpace1.g2(x);
                case 3:
                    return -nameSpace1.g3(x);
                case 4:
                    return -nameSpace1.g4(x);

            }

        }
        case 0:
        {
            switch (cg)
            {
                case 0:
                    return 1 - nameSpace1.g0(x);
                case 1:
                    return 1 - nameSpace1.g1(x);
                case 2:
                    return 1 - nameSpace1.g2(x);
                case 3:
                    return 1 - nameSpace1.g3(x);
                case 4:
                    return 1 - nameSpace1.g4(x);

            }

        }
    }


}

nameSpace1.h = function (x)
{
    var ch = nameSpace1.ch;
    var fa = nameSpace1.farrival();
    switch (fa)
    {
        case 1:
        {
            switch (ch)
            {
                case 0:
                    return nameSpace1.h0(x);
                case 1:
                    return nameSpace1.h1(x);
                case 2:
                    return nameSpace1.h2(x);
                case 3:
                    return nameSpace1.h3(x);
                case 4:
                    return nameSpace1.h4(x);

            }

        }
        case -1:
        {
            switch (ch)
            {
                case 0:
                    return -nameSpace1.h0(x);
                case 1:
                    return -nameSpace1.h1(x);
                case 2:
                    return -nameSpace1.h2(x);
                case 3:
                    return -nameSpace1.h3(x);
                case 4:
                    return -nameSpace1.h4(x);

            }

        }
        case 0:
        {
            switch (ch)
            {
                case 0:
                    return 1 - nameSpace1.h0(x);
                case 1:
                    return 1 - nameSpace1.h1(x);
                case 2:
                    return 1 - nameSpace1.h2(x);
                case 3:
                    return 1 - nameSpace1.h3(x);
                case 4:
                    return 1 - nameSpace1.h4(x);

            }

        }
    }


}


nameSpace1.Paint = function ()
{
    nameSpace1.cg = nameSpace1.random();
    nameSpace1.ch = nameSpace1.random();
    nameSpace1.board.suspendUpdate();
    nameSpace1.board.createElement('functiongraph', [nameSpace1.g, -5, -1], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.f, -1, 1], {strokeColor: 'green', strokeWidth: '4px'});
    nameSpace1.board.createElement('functiongraph', [nameSpace1.h, 1, 5], {strokeColor: 'red', strokeWidth: '4px'});
    nameSpace1.board.unsuspendUpdate();
    
}
nameSpace1.choicef();
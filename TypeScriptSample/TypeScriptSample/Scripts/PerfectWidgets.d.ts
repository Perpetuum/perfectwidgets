declare module PerfectWidgets {
    export module Framework {
        export module DataObjects {
            export class Ellipse {
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenter(center: PerfectWidgets.Framework.DataObjects.Vector): void;
                getRadii(): PerfectWidgets.Framework.DataObjects.Vector;
                setRadii(radii: PerfectWidgets.Framework.DataObjects.Vector): void;
                constructor(center: PerfectWidgets.Framework.DataObjects.Vector, radii: PerfectWidgets.Framework.DataObjects.Vector);
            }
            export class Matrix {
                static eye(size: number): PerfectWidgets.Framework.DataObjects.Matrix;
                get(row: number, column: number): number;
                set(row: number, column: number, value: number): void;
                add(m: PerfectWidgets.Framework.DataObjects.Matrix): PerfectWidgets.Framework.DataObjects.Matrix;
                minus(m: PerfectWidgets.Framework.DataObjects.Matrix): PerfectWidgets.Framework.DataObjects.Matrix;
                multiply(m: PerfectWidgets.Framework.DataObjects.Matrix): PerfectWidgets.Framework.DataObjects.Matrix;
                reverse(): PerfectWidgets.Framework.DataObjects.Matrix;
                static buildTransformationMatrix(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): PerfectWidgets.Framework.DataObjects.Matrix;
                static buildTranslationMatrix(tx: number, ty: number): PerfectWidgets.Framework.DataObjects.Matrix;
                static buildScaleMatrix(sx: number, sy: number): PerfectWidgets.Framework.DataObjects.Matrix;
                static buildRotationMatrix(angle: number): PerfectWidgets.Framework.DataObjects.Matrix;
                constructor(rows: number, columns: number);
            }
            export class RangeValue {
                getMaximum(): number;
                setMaximum(maximumValue: number): void;
                getMinimum(): number;
                setMinimum(minimumValue: number): void;
                static getRange(value: number, rangeSize: number, zeroPoint: number): PerfectWidgets.Framework.DataObjects.RangeValue;
                toString(): string;
                constructor(minimum: number, maximum: number);
            }
            enum RotationDirection {
                NoCycles = 0,
                Clockwise = 1,
                Anticlockwise = 2,
                NearestWay = 3
            }
            export class Segment {
                get_StartValue(): number;
                set_StartValue(value: number): void;
                get_EndValue(): number;
                set_EndValue(value: number): void;
                constructor(start: number, end: number);
                StartValue: number;
                EndValue: number;
            }
            enum Direction {
                X = 0,
                Y = 1
            }
            export class Point {
                constructor(x: number, y: number);
                x: number;
                y: number;
            }
            export class Vector {
                getRotation(): number;
                setRotation(value: number): void;
                getWidth(): number;
                getHeight(): number;
                getX(): number;
                getY(): number;
                setX(val: number): void;
                setY(val: number): void;
                getLength(): number;
                setLength(value: number): void;
                isEmpty(): boolean;
                toString(): string;
                static fromPolar(Length: number, angle: number): PerfectWidgets.Framework.DataObjects.Vector;
                convertUnits(fromUnit: PerfectWidgets.Framework.Drawing.Unit, toUnit: PerfectWidgets.Framework.Drawing.Unit): PerfectWidgets.Framework.DataObjects.Vector;
                abs(): number;
                quant(xGrid: number, yGrid: number): PerfectWidgets.Framework.DataObjects.Vector;
                quantX(xGrid: number): PerfectWidgets.Framework.DataObjects.Vector;
                quantY(yGrid: number): PerfectWidgets.Framework.DataObjects.Vector;
                getNormalized(): PerfectWidgets.Framework.DataObjects.Vector;
                getPerpendicular(): PerfectWidgets.Framework.DataObjects.Vector;
                getProjection(startPoint: PerfectWidgets.Framework.DataObjects.Vector, endPoint: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                rotate(angle: number): PerfectWidgets.Framework.DataObjects.Vector;
                add(v: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                minus(v: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                multiply(v: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                divide(v: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                divideByNumber(v: number): PerfectWidgets.Framework.DataObjects.Vector;
                multiplyByNumber(v: number): PerfectWidgets.Framework.DataObjects.Vector;
                negative(): PerfectWidgets.Framework.DataObjects.Vector;
                static equals(obj1: Object, obj2: Object): boolean;
                static toDegrees(angle: number): number;
                static toRadians(angle: number): number;
                constructor(x: number, y: number);
                x: number;
                y: number;
                static empty: PerfectWidgets.Framework.DataObjects.Vector;
            }
            export class VectorRectangle {
                getX(): number;
                getY(): number;
                getWidth(): number;
                getHeight(): number;
                getTop(): number;
                getBottom(): number;
                getLeft(): number;
                getRight(): number;
                getTopLeft(): PerfectWidgets.Framework.DataObjects.Vector;
                getBottomLeft(): PerfectWidgets.Framework.DataObjects.Vector;
                getTopRight(): PerfectWidgets.Framework.DataObjects.Vector;
                getBottomRight(): PerfectWidgets.Framework.DataObjects.Vector;
                getCenterX(): number;
                getCenterY(): number;
                getTopCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                getBottomCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                getLeftCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                getRightCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                getSize(): PerfectWidgets.Framework.DataObjects.Vector;
                getLocation(): PerfectWidgets.Framework.DataObjects.Vector;
                convertUnits(fromUnit: PerfectWidgets.Framework.Drawing.Unit, toUnit: PerfectWidgets.Framework.Drawing.Unit): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getDistance(p: PerfectWidgets.Framework.DataObjects.Vector): number;
                contains(v: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getPositiveRectangle(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static intersect(a: PerfectWidgets.Framework.DataObjects.VectorRectangle, b: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static union(a: PerfectWidgets.Framework.DataObjects.VectorRectangle, b: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static multiply(v: PerfectWidgets.Framework.DataObjects.VectorRectangle, m: number): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static divide(v: PerfectWidgets.Framework.DataObjects.VectorRectangle, m: number): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static expand(v: PerfectWidgets.Framework.DataObjects.VectorRectangle, m: PerfectWidgets.Framework.Drawing.Margins): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static shrink(v: PerfectWidgets.Framework.DataObjects.VectorRectangle, m: PerfectWidgets.Framework.Drawing.Margins): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                isEmpty(): boolean;
                getArea(): number;
                getVertice(): PerfectWidgets.Framework.DataObjects.Vector[];
                equals(obj: Object): boolean;
                setLocation(location: PerfectWidgets.Framework.DataObjects.Vector): void;
                constructor(x: number, y: number, width?: number, height?: number);
                x: number;
                y: number;
                width: number;
                height: number;
                static empty: PerfectWidgets.Framework.DataObjects.VectorRectangle;
            }
        }
        export module Drawing {
            export class Colorizer {
                getColor(portion: number): PerfectWidgets.Framework.Drawing.Color;
            }
            export class Fill {
                createBrush(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                static getCenterPoint(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, delta: number, angle: number): PerfectWidgets.Framework.DataObjects.Vector;
                static getFillRectangle(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, delta: number, angle: number): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static sortColorsByPortion(colors: PerfectWidgets.Framework.Drawing.GradientColorCollection): void;
                getAdditionalAngle(): number;
                setAdditionalAngle(additionalAngle: number): void;
                static emptyFill: PerfectWidgets.Framework.Drawing.Fill;
            }
            export class MultiGradientFill extends PerfectWidgets.Framework.Drawing.Fill {
                getColors(): PerfectWidgets.Framework.Drawing.GradientColorCollection;
                setColors(colors: PerfectWidgets.Framework.Drawing.GradientColorCollection): void;
                getAngle(): number;
                setAngle(angle: number): void;
                getMinPortion(): number;
                getMaxPortion(): number;
                createBrush(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            export class ConicalFill extends PerfectWidgets.Framework.Drawing.MultiGradientFill {
                constructor();
            }
            export class Stroke {
                getStyle(): PerfectWidgets.Framework.Drawing.LineStyle;
                setStyle(style: PerfectWidgets.Framework.Drawing.LineStyle): void;
                getColor(): PerfectWidgets.Framework.Drawing.Color;
                setColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getDashLength(): number;
                setDashLength(dashLength: number): void;
                getDotLength(): number;
                setDotLength(dotLength: number): void;
                getSpaceLenght(): number;
                setSpaceLength(spaceLength: number): void;
                getWidth(): number;
                setWidth(width: number): void;
                constructor();
                static emptyStroke: PerfectWidgets.Framework.Drawing.Stroke;
            }
            export class ColorSection {
                getColor(): PerfectWidgets.Framework.Drawing.Color;
                setColor(ColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getPortion(): number;
                setPortion(PortionValue: number): void;
                constructor();
            }
            export class EllipticArcParameters {
                static fillParameters(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, startAngle: number, sweepAngle: number): PerfectWidgets.Framework.Drawing.EllipticArcParameters;
                static fillLowLevelParameters(rx: number, ry: number, endPoint: PerfectWidgets.Framework.DataObjects.Vector, startAngle: number, sweepAngle: number, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.EllipticArcParameters;
                getRx(): number;
                setRx(rxValue: number): void;
                getRy(): number;
                setRy(ryValue: number): void;
                getRotationAngle(): number;
                setRotationAngle(rotationAngleValue: number): void;
                getLargeArcFlag(): number;
                setLargeArcFlag(largeArcFlagValue: number): void;
                getSweepFlag(): number;
                setSweepFlag(sweepFlagValue: number): void;
                getFinishPoint(): PerfectWidgets.Framework.DataObjects.Vector;
                setFinishPoint(finishPointValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                toString(): string;
                constructor();
            }
            export class Font {
                constructor();
                name: string;
                sizeInPoints: number;
                style: PerfectWidgets.Framework.Drawing.FontStyle;
                fontFamily: PerfectWidgets.Framework.Drawing.FontFamily;
            }
            export class FontFamily {
                constructor();
                name: string;
            }
            enum FontStyle {
                Regular = 0,
                Bold = 1,
                Italic = 2,
                Underline = 4,
                Strikeout = 8
            }
            export class GradientColor {
                setColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getColor(): PerfectWidgets.Framework.Drawing.Color;
                setPortion(portion: number): void;
                getPortion(): number;
                constructor(color: PerfectWidgets.Framework.Drawing.Color, portion: number);
            }
            export class GradientColorCollection {
                add(gradientColor: PerfectWidgets.Framework.Drawing.GradientColor): void;
                set(index: number, color: PerfectWidgets.Framework.Drawing.GradientColor): void;
                get(index: number): PerfectWidgets.Framework.Drawing.GradientColor;
                getCount(): number;
                constructor();
            }
            export class GraphicsPathElement {
                getElementType(): PerfectWidgets.Framework.Drawing.GraphicsPathElementType;
                setElementType(elementTypeValue: PerfectWidgets.Framework.Drawing.GraphicsPathElementType): void;
                toString(): string;
                constructor(elementType: PerfectWidgets.Framework.Drawing.GraphicsPathElementType);
            }
            enum GraphicsPathElementType {
                MoveTo = 0,
                LineTo = 1,
                ClosePath = 2,
                HorizontalLineTo = 3,
                VerticalLineTo = 4,
                EllipticalArc = 5
            }
            export class GraphicsUtilites {
                static middleColor(color1: PerfectWidgets.Framework.Drawing.Color, color2: PerfectWidgets.Framework.Drawing.Color): PerfectWidgets.Framework.Drawing.Color;
                static scaleColor(sourceColor: PerfectWidgets.Framework.Drawing.Color, scale: number): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            export class HatchFill extends PerfectWidgets.Framework.Drawing.Fill {
                getBackColor(): PerfectWidgets.Framework.Drawing.Color;
                setBackColor(backColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getForeColor(): PerfectWidgets.Framework.Drawing.Color;
                setForeColor(foreColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                createBrush(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            enum HatchStyle {
                Horizontal = 0,
                Min = 0,
                Vertical = 1,
                ForwardDiagonal = 2,
                BackwardDiagonal = 3,
                Max = 4,
                Cross = 4,
                LargeGrid = 4,
                DiagonalCross = 5,
                Percent05 = 6,
                Percent10 = 7,
                Percent20 = 8,
                Percent25 = 9,
                Percent30 = 10,
                Percent40 = 11,
                Percent50 = 12,
                Percent60 = 13,
                Percent70 = 14,
                Percent75 = 15,
                Percent80 = 16,
                Percent90 = 17,
                LightDownwardDiagonal = 18,
                LightUpwardDiagonal = 19,
                DarkDownwardDiagonal = 20,
                DarkUpwardDiagonal = 21,
                WideDownwardDiagonal = 22,
                WideUpwardDiagonal = 23,
                LightVertical = 24,
                LightHorizontal = 25,
                NarrowVertical = 26,
                NarrowHorizontal = 27,
                DarkVertical = 28,
                DarkHorizontal = 29,
                DashedDownwardDiagonal = 30,
                DashedUpwardDiagonal = 31,
                DashedHorizontal = 32,
                DashedVertical = 33,
                SmallConfetti = 34,
                LargeConfetti = 35,
                ZigZag = 36,
                Wave = 37,
                DiagonalBrick = 38,
                HorizontalBrick = 39,
                Weave = 40,
                Plaid = 41,
                Divot = 42,
                DottedGrid = 43,
                DottedDiamond = 44,
                Shingle = 45,
                Trellis = 46,
                Sphere = 47,
                SmallGrid = 48,
                SmallCheckerBoard = 49,
                LargeCheckerBoard = 50,
                OutlinedDiamond = 51,
                SolidDiamond = 52
            }
            export class PathElementCollection extends PerfectWidgets.Framework.Drawing.GraphicsPathElement {
                add(elem: Object): void;
                addRange(elements: Object[]): void;
                get_Count(): number;
                get_Item(index: number): Object;
                toString(): string;
                constructor(elementType: PerfectWidgets.Framework.Drawing.GraphicsPathElementType);
                Count: number;
                Item: Object;
            }
            enum PathPointType {
                Start = 0,
                Line = 1,
                Bezier3 = 3,
                Bezier = 3,
                PathTypeMask = 7,
                DashMode = 16,
                PathMarker = 32,
                CloseSubpath = 128
            }
            export class SectionsColorizer extends PerfectWidgets.Framework.Drawing.Colorizer {
                getColorSections(): PerfectWidgets.Framework.Drawing.ColorSection[];
                setColorSections(sections: PerfectWidgets.Framework.Drawing.ColorSection[]): void;
                getColor(portion: number): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            export class SingleColorColorizer extends PerfectWidgets.Framework.Drawing.Colorizer {
                setColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getColor(portion: number): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            export class Brush {
            }
            export class SolidBrush extends PerfectWidgets.Framework.Drawing.Brush {
                constructor(Color: PerfectWidgets.Framework.Drawing.Color);
                color: PerfectWidgets.Framework.Drawing.Color;
            }
            export class SphericalFill extends PerfectWidgets.Framework.Drawing.Fill {
                setEndColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getEndColor(): PerfectWidgets.Framework.Drawing.Color;
                getStartColor(): PerfectWidgets.Framework.Drawing.Color;
                setStartColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                setAngle(angle: number): void;
                getAngle(): number;
                setDelta(delta: number): void;
                getDelta(): number;
                getColors(): PerfectWidgets.Framework.Drawing.GradientColorCollection;
                setColors(colors: PerfectWidgets.Framework.Drawing.GradientColorCollection): void;
                createBrush(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            export class Color {
                r(): number;
                g(): number;
                b(): number;
                a(): number;
                static createKnownColor(knownColor: PerfectWidgets.Framework.Drawing.KnownColor): PerfectWidgets.Framework.Drawing.Color;
                static fromArgb(alpha: number, red: number, green: number, blue: number): PerfectWidgets.Framework.Drawing.Color;
                static fromArgbProto(alpha: number, color: PerfectWidgets.Framework.Drawing.Color): PerfectWidgets.Framework.Drawing.Color;
                toArgb(): number;
                isEmpty(): boolean;
                isSystemColor(): boolean;
                isKnownColor(): boolean;
                isNamedColor(): boolean;
                toKnownColor(): PerfectWidgets.Framework.Drawing.KnownColor;
                toString(): string;
                name(): string;
                static equals(obj1: Object, obj2: Object): boolean;
                constructor(value: number, state: number, name?: string, knownColor?: PerfectWidgets.Framework.Drawing.KnownColor);
                static empty: PerfectWidgets.Framework.Drawing.Color;
                static transparent: PerfectWidgets.Framework.Drawing.Color;
                static aliceBlue: PerfectWidgets.Framework.Drawing.Color;
                static antiqueWhite: PerfectWidgets.Framework.Drawing.Color;
                static aqua: PerfectWidgets.Framework.Drawing.Color;
                static aquamarine: PerfectWidgets.Framework.Drawing.Color;
                static azure: PerfectWidgets.Framework.Drawing.Color;
                static beige: PerfectWidgets.Framework.Drawing.Color;
                static bisque: PerfectWidgets.Framework.Drawing.Color;
                static black: PerfectWidgets.Framework.Drawing.Color;
                static blanchedAlmond: PerfectWidgets.Framework.Drawing.Color;
                static blue: PerfectWidgets.Framework.Drawing.Color;
                static blueViolet: PerfectWidgets.Framework.Drawing.Color;
                static brown: PerfectWidgets.Framework.Drawing.Color;
                static burlyWood: PerfectWidgets.Framework.Drawing.Color;
                static cadetBlue: PerfectWidgets.Framework.Drawing.Color;
                static chartreuse: PerfectWidgets.Framework.Drawing.Color;
                static chocolate: PerfectWidgets.Framework.Drawing.Color;
                static control: PerfectWidgets.Framework.Drawing.Color;
                static coral: PerfectWidgets.Framework.Drawing.Color;
                static cornflowerBlue: PerfectWidgets.Framework.Drawing.Color;
                static cornsilk: PerfectWidgets.Framework.Drawing.Color;
                static crimson: PerfectWidgets.Framework.Drawing.Color;
                static cyan: PerfectWidgets.Framework.Drawing.Color;
                static darkBlue: PerfectWidgets.Framework.Drawing.Color;
                static darkCyan: PerfectWidgets.Framework.Drawing.Color;
                static darkGoldenrod: PerfectWidgets.Framework.Drawing.Color;
                static darkGray: PerfectWidgets.Framework.Drawing.Color;
                static darkGreen: PerfectWidgets.Framework.Drawing.Color;
                static darkKhaki: PerfectWidgets.Framework.Drawing.Color;
                static darkMagenta: PerfectWidgets.Framework.Drawing.Color;
                static darkOliveGreen: PerfectWidgets.Framework.Drawing.Color;
                static darkOrange: PerfectWidgets.Framework.Drawing.Color;
                static darkOrchid: PerfectWidgets.Framework.Drawing.Color;
                static darkRed: PerfectWidgets.Framework.Drawing.Color;
                static darkSalmon: PerfectWidgets.Framework.Drawing.Color;
                static darkSeaGreen: PerfectWidgets.Framework.Drawing.Color;
                static darkSlateBlue: PerfectWidgets.Framework.Drawing.Color;
                static darkSlateGray: PerfectWidgets.Framework.Drawing.Color;
                static darkTurquoise: PerfectWidgets.Framework.Drawing.Color;
                static darkViolet: PerfectWidgets.Framework.Drawing.Color;
                static deepPink: PerfectWidgets.Framework.Drawing.Color;
                static deepSkyBlue: PerfectWidgets.Framework.Drawing.Color;
                static dimGray: PerfectWidgets.Framework.Drawing.Color;
                static dodgerBlue: PerfectWidgets.Framework.Drawing.Color;
                static firebrick: PerfectWidgets.Framework.Drawing.Color;
                static floralWhite: PerfectWidgets.Framework.Drawing.Color;
                static forestGreen: PerfectWidgets.Framework.Drawing.Color;
                static fuchsia: PerfectWidgets.Framework.Drawing.Color;
                static gainsboro: PerfectWidgets.Framework.Drawing.Color;
                static ghostWhite: PerfectWidgets.Framework.Drawing.Color;
                static gold: PerfectWidgets.Framework.Drawing.Color;
                static goldenrod: PerfectWidgets.Framework.Drawing.Color;
                static gray: PerfectWidgets.Framework.Drawing.Color;
                static green: PerfectWidgets.Framework.Drawing.Color;
                static greenYellow: PerfectWidgets.Framework.Drawing.Color;
                static honeydew: PerfectWidgets.Framework.Drawing.Color;
                static hotPink: PerfectWidgets.Framework.Drawing.Color;
                static indianRed: PerfectWidgets.Framework.Drawing.Color;
                static indigo: PerfectWidgets.Framework.Drawing.Color;
                static ivory: PerfectWidgets.Framework.Drawing.Color;
                static khaki: PerfectWidgets.Framework.Drawing.Color;
                static lavender: PerfectWidgets.Framework.Drawing.Color;
                static lavenderBlush: PerfectWidgets.Framework.Drawing.Color;
                static lawnGreen: PerfectWidgets.Framework.Drawing.Color;
                static lemonChiffon: PerfectWidgets.Framework.Drawing.Color;
                static lightBlue: PerfectWidgets.Framework.Drawing.Color;
                static lightCoral: PerfectWidgets.Framework.Drawing.Color;
                static lightCyan: PerfectWidgets.Framework.Drawing.Color;
                static lightGoldenrodYellow: PerfectWidgets.Framework.Drawing.Color;
                static lightGreen: PerfectWidgets.Framework.Drawing.Color;
                static lightGray: PerfectWidgets.Framework.Drawing.Color;
                static lightPink: PerfectWidgets.Framework.Drawing.Color;
                static lightSalmon: PerfectWidgets.Framework.Drawing.Color;
                static lightSeaGreen: PerfectWidgets.Framework.Drawing.Color;
                static lightSkyBlue: PerfectWidgets.Framework.Drawing.Color;
                static lightSlateGray: PerfectWidgets.Framework.Drawing.Color;
                static lightSteelBlue: PerfectWidgets.Framework.Drawing.Color;
                static lightYellow: PerfectWidgets.Framework.Drawing.Color;
                static lime: PerfectWidgets.Framework.Drawing.Color;
                static limeGreen: PerfectWidgets.Framework.Drawing.Color;
                static linen: PerfectWidgets.Framework.Drawing.Color;
                static magenta: PerfectWidgets.Framework.Drawing.Color;
                static maroon: PerfectWidgets.Framework.Drawing.Color;
                static mediumAquamarine: PerfectWidgets.Framework.Drawing.Color;
                static mediumBlue: PerfectWidgets.Framework.Drawing.Color;
                static mediumOrchid: PerfectWidgets.Framework.Drawing.Color;
                static mediumPurple: PerfectWidgets.Framework.Drawing.Color;
                static mediumSeaGreen: PerfectWidgets.Framework.Drawing.Color;
                static mediumSlateBlue: PerfectWidgets.Framework.Drawing.Color;
                static mediumSpringGreen: PerfectWidgets.Framework.Drawing.Color;
                static mediumTurquoise: PerfectWidgets.Framework.Drawing.Color;
                static mediumVioletRed: PerfectWidgets.Framework.Drawing.Color;
                static midnightBlue: PerfectWidgets.Framework.Drawing.Color;
                static mintCream: PerfectWidgets.Framework.Drawing.Color;
                static mistyRose: PerfectWidgets.Framework.Drawing.Color;
                static moccasin: PerfectWidgets.Framework.Drawing.Color;
                static navajoWhite: PerfectWidgets.Framework.Drawing.Color;
                static navy: PerfectWidgets.Framework.Drawing.Color;
                static oldLace: PerfectWidgets.Framework.Drawing.Color;
                static olive: PerfectWidgets.Framework.Drawing.Color;
                static oliveDrab: PerfectWidgets.Framework.Drawing.Color;
                static orange: PerfectWidgets.Framework.Drawing.Color;
                static orangeRed: PerfectWidgets.Framework.Drawing.Color;
                static orchid: PerfectWidgets.Framework.Drawing.Color;
                static paleGoldenrod: PerfectWidgets.Framework.Drawing.Color;
                static paleGreen: PerfectWidgets.Framework.Drawing.Color;
                static paleTurquoise: PerfectWidgets.Framework.Drawing.Color;
                static paleVioletRed: PerfectWidgets.Framework.Drawing.Color;
                static papayaWhip: PerfectWidgets.Framework.Drawing.Color;
                static peachPuff: PerfectWidgets.Framework.Drawing.Color;
                static peru: PerfectWidgets.Framework.Drawing.Color;
                static pink: PerfectWidgets.Framework.Drawing.Color;
                static plum: PerfectWidgets.Framework.Drawing.Color;
                static powderBlue: PerfectWidgets.Framework.Drawing.Color;
                static purple: PerfectWidgets.Framework.Drawing.Color;
                static red: PerfectWidgets.Framework.Drawing.Color;
                static rosyBrown: PerfectWidgets.Framework.Drawing.Color;
                static royalBlue: PerfectWidgets.Framework.Drawing.Color;
                static saddleBrown: PerfectWidgets.Framework.Drawing.Color;
                static salmon: PerfectWidgets.Framework.Drawing.Color;
                static sandyBrown: PerfectWidgets.Framework.Drawing.Color;
                static seaGreen: PerfectWidgets.Framework.Drawing.Color;
                static seaShell: PerfectWidgets.Framework.Drawing.Color;
                static sienna: PerfectWidgets.Framework.Drawing.Color;
                static silver: PerfectWidgets.Framework.Drawing.Color;
                static skyBlue: PerfectWidgets.Framework.Drawing.Color;
                static slateBlue: PerfectWidgets.Framework.Drawing.Color;
                static slateGray: PerfectWidgets.Framework.Drawing.Color;
                static snow: PerfectWidgets.Framework.Drawing.Color;
                static springGreen: PerfectWidgets.Framework.Drawing.Color;
                static steelBlue: PerfectWidgets.Framework.Drawing.Color;
                static tan: PerfectWidgets.Framework.Drawing.Color;
                static teal: PerfectWidgets.Framework.Drawing.Color;
                static thistle: PerfectWidgets.Framework.Drawing.Color;
                static tomato: PerfectWidgets.Framework.Drawing.Color;
                static turquoise: PerfectWidgets.Framework.Drawing.Color;
                static violet: PerfectWidgets.Framework.Drawing.Color;
                static wheat: PerfectWidgets.Framework.Drawing.Color;
                static white: PerfectWidgets.Framework.Drawing.Color;
                static whiteSmoke: PerfectWidgets.Framework.Drawing.Color;
                static yellow: PerfectWidgets.Framework.Drawing.Color;
                static yellowGreen: PerfectWidgets.Framework.Drawing.Color;
            }
            export class ColorTranslator {
                static toHtml(c: PerfectWidgets.Framework.Drawing.Color): string;
                static toSvg(c: PerfectWidgets.Framework.Drawing.Color): string;
                constructor();
            }
            enum ContentAlignment {
                TopLeft = 1,
                TopCenter = 2,
                TopRight = 4,
                MiddleLeft = 16,
                MiddleCenter = 32,
                MiddleRight = 64,
                BottomLeft = 256,
                BottomCenter = 512,
                BottomRight = 1024
            }
            enum DashCap {
                Flat = 0,
                Round = 2,
                Triangle = 3
            }
            enum DashStyle {
                Empty = 0,
                Solid = 1,
                Dash = 2,
                Dot = 3,
                DashDot = 4,
                DashDotDot = 5,
                Custom = 6
            }
            export class EmptyFill extends PerfectWidgets.Framework.Drawing.Fill {
                createBrush(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                constructor();
            }
            enum FillMode {
                Alternate = 0,
                Winding = 1
            }
            export class GraphicsPath {
                addGraphicsPath(appendedPath: PerfectWidgets.Framework.Drawing.GraphicsPath): void;
                addPathElement(graphicsPathElement: PerfectWidgets.Framework.Drawing.GraphicsPathElement): void;
                get_Count(): number;
                get_PathElements(): PerfectWidgets.Framework.Drawing.GraphicsPathElement[];
                set_PathElements(value: PerfectWidgets.Framework.Drawing.GraphicsPathElement[]): void;
                setBounds(boundedBox: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
                getBounds(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                addArc(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, startAngle: number, sweepAngle: number): void;
                addLine(endPoint: PerfectWidgets.Framework.DataObjects.Vector): void;
                moveTo(target: PerfectWidgets.Framework.DataObjects.Vector): void;
                static buildVector(line: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                startPath(origin: PerfectWidgets.Framework.DataObjects.Vector): void;
                terminate(): void;
                toString(): string;
                constructor();
                Count: number;
                PathElements: PerfectWidgets.Framework.Drawing.GraphicsPathElement[];
            }
            enum GraphicsUnit {
                World = 0,
                Display = 1,
                Pixel = 2,
                Point = 3,
                Inch = 4,
                Document = 5,
                Millimeter = 6
            }
            export class Image {
                getImageStream(): string;
                constructor(stream: string);
            }
            enum KnownColor {
                ActiveBorder = 1,
                ActiveCaption = 2,
                ActiveCaptionText = 3,
                AppWorkspace = 4,
                Control = 5,
                ControlDark = 6,
                ControlDarkDark = 7,
                ControlLight = 8,
                ControlLightLight = 9,
                ControlText = 10,
                Desktop = 11,
                GrayText = 12,
                Highlight = 13,
                HighlightText = 14,
                HotTrack = 15,
                InactiveBorder = 16,
                InactiveCaption = 17,
                InactiveCaptionText = 18,
                Info = 19,
                InfoText = 20,
                Menu = 21,
                MenuText = 22,
                ScrollBar = 23,
                Window = 24,
                WindowFrame = 25,
                WindowText = 26,
                Transparent = 27,
                AliceBlue = 28,
                AntiqueWhite = 29,
                Aqua = 30,
                Aquamarine = 31,
                Azure = 32,
                Beige = 33,
                Bisque = 34,
                Black = 35,
                BlanchedAlmond = 36,
                Blue = 37,
                BlueViolet = 38,
                Brown = 39,
                BurlyWood = 40,
                CadetBlue = 41,
                Chartreuse = 42,
                Chocolate = 43,
                Coral = 44,
                CornflowerBlue = 45,
                Cornsilk = 46,
                Crimson = 47,
                Cyan = 48,
                DarkBlue = 49,
                DarkCyan = 50,
                DarkGoldenrod = 51,
                DarkGray = 52,
                DarkGreen = 53,
                DarkKhaki = 54,
                DarkMagenta = 55,
                DarkOliveGreen = 56,
                DarkOrange = 57,
                DarkOrchid = 58,
                DarkRed = 59,
                DarkSalmon = 60,
                DarkSeaGreen = 61,
                DarkSlateBlue = 62,
                DarkSlateGray = 63,
                DarkTurquoise = 64,
                DarkViolet = 65,
                DeepPink = 66,
                DeepSkyBlue = 67,
                DimGray = 68,
                DodgerBlue = 69,
                Firebrick = 70,
                FloralWhite = 71,
                ForestGreen = 72,
                Fuchsia = 73,
                Gainsboro = 74,
                GhostWhite = 75,
                Gold = 76,
                Goldenrod = 77,
                Gray = 78,
                Green = 79,
                GreenYellow = 80,
                Honeydew = 81,
                HotPink = 82,
                IndianRed = 83,
                Indigo = 84,
                Ivory = 85,
                Khaki = 86,
                Lavender = 87,
                LavenderBlush = 88,
                LawnGreen = 89,
                LemonChiffon = 90,
                LightBlue = 91,
                LightCoral = 92,
                LightCyan = 93,
                LightGoldenrodYellow = 94,
                LightGray = 95,
                LightGreen = 96,
                LightPink = 97,
                LightSalmon = 98,
                LightSeaGreen = 99,
                LightSkyBlue = 100,
                LightSlateGray = 101,
                LightSteelBlue = 102,
                LightYellow = 103,
                Lime = 104,
                LimeGreen = 105,
                Linen = 106,
                Magenta = 107,
                Maroon = 108,
                MediumAquamarine = 109,
                MediumBlue = 110,
                MediumOrchid = 111,
                MediumPurple = 112,
                MediumSeaGreen = 113,
                MediumSlateBlue = 114,
                MediumSpringGreen = 115,
                MediumTurquoise = 116,
                MediumVioletRed = 117,
                MidnightBlue = 118,
                MintCream = 119,
                MistyRose = 120,
                Moccasin = 121,
                NavajoWhite = 122,
                Navy = 123,
                OldLace = 124,
                Olive = 125,
                OliveDrab = 126,
                Orange = 127,
                OrangeRed = 128,
                Orchid = 129,
                PaleGoldenrod = 130,
                PaleGreen = 131,
                PaleTurquoise = 132,
                PaleVioletRed = 133,
                PapayaWhip = 134,
                PeachPuff = 135,
                Peru = 136,
                Pink = 137,
                Plum = 138,
                PowderBlue = 139,
                Purple = 140,
                Red = 141,
                RosyBrown = 142,
                RoyalBlue = 143,
                SaddleBrown = 144,
                Salmon = 145,
                SandyBrown = 146,
                SeaGreen = 147,
                SeaShell = 148,
                Sienna = 149,
                Silver = 150,
                SkyBlue = 151,
                SlateBlue = 152,
                SlateGray = 153,
                Snow = 154,
                SpringGreen = 155,
                SteelBlue = 156,
                Tan = 157,
                Teal = 158,
                Thistle = 159,
                Tomato = 160,
                Turquoise = 161,
                Violet = 162,
                Wheat = 163,
                White = 164,
                WhiteSmoke = 165,
                Yellow = 166,
                YellowGreen = 167,
                ButtonFace = 168,
                ButtonHighlight = 169,
                ButtonShadow = 170,
                GradientActiveCaption = 171,
                GradientInactiveCaption = 172,
                MenuBar = 173,
                MenuHighlight = 174
            }
            export class KnownColorTable {
                static knownColorToArgb(color: PerfectWidgets.Framework.Drawing.KnownColor): number;
                static knownColorToName(color: PerfectWidgets.Framework.Drawing.KnownColor): string;
                static knownColorFromName(name: string): PerfectWidgets.Framework.Drawing.KnownColor;
            }
            export class LinearGradientFill extends PerfectWidgets.Framework.Drawing.Fill {
                getColors(): PerfectWidgets.Framework.Drawing.GradientColorCollection;
                setColors(colors: PerfectWidgets.Framework.Drawing.GradientColorCollection): void;
                getStartColor(): PerfectWidgets.Framework.Drawing.Color;
                setStartColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getEndColor(): PerfectWidgets.Framework.Drawing.Color;
                setEndColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getAngle(): number;
                setAngle(angle: number): void;
                createBrush(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                static fromParams(startColor: PerfectWidgets.Framework.Drawing.Color, endColor: PerfectWidgets.Framework.Drawing.Color, angle: number): PerfectWidgets.Framework.Drawing.LinearGradientFill;
                constructor();
            }
            enum LineStyle {
                None = 0,
                Solid = 1,
                Dot = 2,
                Dash = 3,
                DashDot = 4,
                DashDotDot = 5
            }
            export class Margins {
                static symetricMargins(value: number): PerfectWidgets.Framework.Drawing.Margins;
                static add(a: PerfectWidgets.Framework.Drawing.Margins, b: PerfectWidgets.Framework.Drawing.Margins): PerfectWidgets.Framework.Drawing.Margins;
                static multiply(a: PerfectWidgets.Framework.Drawing.Margins, b: PerfectWidgets.Framework.Drawing.Margins): PerfectWidgets.Framework.Drawing.Margins;
                equals(obj: Object): boolean;
                convertUnits(fromUnit: PerfectWidgets.Framework.Drawing.Unit, toUnit: PerfectWidgets.Framework.Drawing.Unit): PerfectWidgets.Framework.Drawing.Margins;
                isEmpty(): boolean;
                size(): PerfectWidgets.Framework.DataObjects.Vector;
                constructor(top: number, bottom: number, left?: number, right?: number);
                left: number;
                top: number;
                right: number;
                bottom: number;
                static empty: PerfectWidgets.Framework.Drawing.Margins;
            }
            export class Pen {
                getColor(): PerfectWidgets.Framework.Drawing.Color;
                setColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getDashStyle(): PerfectWidgets.Framework.Drawing.DashStyle;
                setDashStyle(dashStyle: PerfectWidgets.Framework.Drawing.DashStyle): void;
                getDashCap(): PerfectWidgets.Framework.Drawing.DashCap;
                setDashCap(dashCap: PerfectWidgets.Framework.Drawing.DashCap): void;
                getDashOffset(): number;
                setDashOffset(dashOffset: number): void;
                getDashPattern(): number[];
                setDashPattern(dashPattern: number[]): void;
                getWidth(): number;
                setWidth(width: number): void;
                constructor(color: PerfectWidgets.Framework.Drawing.Color, width: number);
            }
            export class SolidFill extends PerfectWidgets.Framework.Drawing.Fill {
                setColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                createBrush(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.Drawing.Brush;
                getReplaceColor(): PerfectWidgets.Framework.Drawing.Color;
                constructor(solidColor: PerfectWidgets.Framework.Drawing.Color);
                color: PerfectWidgets.Framework.Drawing.Color;
            }
            export class Unit {
                static getStandardUnits(): PerfectWidgets.Framework.Drawing.Unit[];
                equals(obj: Object): boolean;
                static convert(value: number, fromUnit: PerfectWidgets.Framework.Drawing.Unit, toUnit: PerfectWidgets.Framework.Drawing.Unit): number;
                static fromName(name: string): PerfectWidgets.Framework.Drawing.Unit;
                static toInternalUnit(value: number, fromUnit: PerfectWidgets.Framework.Drawing.Unit): number;
                static rectToPixel(input: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static rectToInternal(input: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static vectorToPixel(input: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                static vectorToInternal(input: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                static fromInternalUnit(value: number, toUnit: PerfectWidgets.Framework.Drawing.Unit): number;
                static internalToPixel(value: number): number;
                static pixelToInternal(value: number): number;
                constructor(name: string, shortName: string, k?: number);
                name: string;
                shortName: string;
                k: number;
                static internalUnit: PerfectWidgets.Framework.Drawing.Unit;
                static millimeter: PerfectWidgets.Framework.Drawing.Unit;
                static centimeter: PerfectWidgets.Framework.Drawing.Unit;
                static inch: PerfectWidgets.Framework.Drawing.Unit;
                static point: PerfectWidgets.Framework.Drawing.Unit;
                static pixel: PerfectWidgets.Framework.Drawing.Unit;
                static twip: PerfectWidgets.Framework.Drawing.Unit;
                static standardGraphicsUnit: PerfectWidgets.Framework.Drawing.GraphicsUnit;
                static baseUnitPerInch: number;
            }
        }
        export module Utilities {
            export class BuiltIn {
                static castToColor(input: Object): PerfectWidgets.Framework.Drawing.Color;
                static oldFormat(value: number, format: string): string;
                static netFormat(format: string, value: number): string;
                static jS(str: string): void;
            }
            export class TextUtilities {
                static insertMockDiv(font: PerfectWidgets.Framework.Drawing.Font): Element;
                static deleteMockDiv(div: Element): void;
                static splitText(text: string, lineWidth: number, font: PerfectWidgets.Framework.Drawing.Font): string[];
                static wordWrapText(text: string, lineWidth: number, font: PerfectWidgets.Framework.Drawing.Font): string[];
                static measureText(text: string, font: PerfectWidgets.Framework.Drawing.Font, measuringDiv: Element): PerfectWidgets.Framework.DataObjects.Vector;
                static stylesAreCrossing(style1: PerfectWidgets.Framework.Drawing.FontStyle, style2: PerfectWidgets.Framework.Drawing.FontStyle): boolean;
                static rasterizeText(font: PerfectWidgets.Framework.Drawing.Font, text: string, position: PerfectWidgets.Framework.DataObjects.Vector, size: PerfectWidgets.Framework.DataObjects.Vector): number[];
                static castToString(value: Object): string;
                constructor();
            }
            export class MathHelper {
                static sign(n: Number): number;
                static round(num: number, dec: number): number;
                static log(value: number, b: number): number;
                static epsilon: number;
            }
            export class Guid {
                static newGuid(): string;
            }
        }
        export module Geometry {
            export class GeometryUtilities {
                static radianToDegree(angel: number): number;
                static getEllipse(boundedBox: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.Ellipse;
                static getTransformMatrix(center: PerfectWidgets.Framework.DataObjects.Vector, angle: number): PerfectWidgets.Framework.DataObjects.Matrix;
                static getEllipsePoint(center: PerfectWidgets.Framework.DataObjects.Vector, radii: PerfectWidgets.Framework.DataObjects.Vector, angleInDegrees: number): PerfectWidgets.Framework.DataObjects.Vector;
                static getEllipseRadius(ellipseBounds: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number): number;
                static isLineIncludePoint(point: PerfectWidgets.Framework.DataObjects.Vector, sPoint: PerfectWidgets.Framework.DataObjects.Vector, ePoint: PerfectWidgets.Framework.DataObjects.Vector, accuracy: number): boolean;
                static rotateVector(v: PerfectWidgets.Framework.DataObjects.Vector, center: PerfectWidgets.Framework.DataObjects.Vector, alpha: number): PerfectWidgets.Framework.DataObjects.Vector;
                static getPolygonBox(polygonPoints: PerfectWidgets.Framework.DataObjects.Vector[]): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                static isIncludePoint(polygonPoints: PerfectWidgets.Framework.DataObjects.Vector[], point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                static degreeToRadian(angle: number): number;
                static getDistance(point1: PerfectWidgets.Framework.DataObjects.Vector, point2: PerfectWidgets.Framework.DataObjects.Vector): number;
                static isPieIncludePoint(point: PerfectWidgets.Framework.DataObjects.Vector, bounds: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number, startAngle: number, sweepAngle: number, accuracy: number): boolean;
            }
        }
        export module Styles {
            export class Style {
                getFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFill(fillValue: PerfectWidgets.Framework.Drawing.Fill): void;
                getFont(): PerfectWidgets.Framework.Drawing.Font;
                setFont(fontValue: PerfectWidgets.Framework.Drawing.Font): void;
                getImage(): PerfectWidgets.Framework.Drawing.Image;
                setImage(imageValue: PerfectWidgets.Framework.Drawing.Image): void;
                getName(): string;
                setName(nameValue: string): void;
                getStroke(): PerfectWidgets.Framework.Drawing.Stroke;
                setStroke(strokeValue: PerfectWidgets.Framework.Drawing.Stroke): void;
                toString(): string;
                constructor();
            }
            export class StyleCollection {
                add(value: PerfectWidgets.Framework.Styles.Style): PerfectWidgets.Framework.Styles.Style;
                addRange(values: PerfectWidgets.Framework.Styles.Style[]): void;
                remove(value: PerfectWidgets.Framework.Styles.Style): void;
                insert(index: number, value: PerfectWidgets.Framework.Styles.Style): void;
                contains(value: PerfectWidgets.Framework.Styles.Style): boolean;
                indexOf(value: PerfectWidgets.Framework.Styles.Style): number;
                count(): number;
                getStyleByIndex(index: number): PerfectWidgets.Framework.Styles.Style;
                setStyleByIndex(index: number, style: PerfectWidgets.Framework.Styles.Style): void;
                getStyleByName(styleName: string): PerfectWidgets.Framework.Styles.Style;
                setStyleByName(styleName: string, style: PerfectWidgets.Framework.Styles.Style): void;
                clear(): void;
                constructor();
            }
        }
        export module Transformation {
            export class AbstractTransformation {
                apply(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                reverse(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationMatrix(): PerfectWidgets.Framework.DataObjects.Matrix;
                static noTrasformation: PerfectWidgets.Framework.Transformation.AbstractTransformation;
            }
            export class MockTransformation extends PerfectWidgets.Framework.Transformation.AbstractTransformation {
                apply(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                reverse(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationMatrix(): PerfectWidgets.Framework.DataObjects.Matrix;
                constructor();
            }
            export class MatrixTransformation extends PerfectWidgets.Framework.Transformation.AbstractTransformation {
                apply(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                reverse(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationMatrix(): PerfectWidgets.Framework.DataObjects.Matrix;
                setTransformationMatrix(matrix: PerfectWidgets.Framework.DataObjects.Matrix): void;
                constructor(m: PerfectWidgets.Framework.DataObjects.Matrix);
            }
            export class RotateTransformation extends PerfectWidgets.Framework.Transformation.AbstractTransformation {
                getAngle(): number;
                setAngle(angle: number): void;
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenter(center: PerfectWidgets.Framework.DataObjects.Vector): void;
                apply(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                reverse(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationMatrix(): PerfectWidgets.Framework.DataObjects.Matrix;
                constructor();
            }
            export class ScaleTransformation extends PerfectWidgets.Framework.Transformation.AbstractTransformation {
                getScale(): PerfectWidgets.Framework.DataObjects.Vector;
                setScale(scale: PerfectWidgets.Framework.DataObjects.Vector): void;
                apply(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                reverse(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationMatrix(): PerfectWidgets.Framework.DataObjects.Matrix;
                constructor();
            }
            export class TranslateTransformation extends PerfectWidgets.Framework.Transformation.AbstractTransformation {
                getTranslation(): PerfectWidgets.Framework.DataObjects.Vector;
                setTranslation(translation: PerfectWidgets.Framework.DataObjects.Vector): void;
                apply(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                reverse(position: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationMatrix(): PerfectWidgets.Framework.DataObjects.Matrix;
                constructor();
            }
        }
    }
    export module Model {
        export module Animation {
            enum AnimationState {
                Disabled = 1,
                DragAndDrop = 2,
                Stoped = 4,
                Started = 8
            }
            export class EasingFunctions {
                static linear(portion: number, startValue: number, dy: number, duration: number): number;
                static swing(portion: number, startValue: number, dy: number, duration: number): number;
                static easeInQuad(portion: number, startValue: number, dy: number, duration: number): number;
                static easeOutQuad(portion: number, startValue: number, dy: number, duration: number): number;
                static easeInOutQuad(portion: number, startValue: number, dy: number, duration: number): number;
                static easeInExpo(portion: number, startValue: number, dy: number, duration: number): number;
                static easeOutExpo(portion: number, startValue: number, dy: number, duration: number): number;
                static easeInOutExpo(portion: number, startValue: number, dy: number, duration: number): number;
                static easeInBack(portion: number, startValue: number, dy: number, duration: number): number;
                static easeOutBack(portion: number, startValue: number, dy: number, duration: number): number;
                static easeInOutBack(portion: number, startValue: number, dy: number, duration: number): number;
                constructor();
            }
            export class EasingDelegate {
                invoke(portion: number, startValue: number, endValue: number, duration: number): number;
                constructor(object: Object, method: any);
            }
            export interface IAnimatable {
                getAnimation(): PerfectWidgets.Model.Animation.AbstractAnimation;
                setAnimation(animation: PerfectWidgets.Model.Animation.AbstractAnimation): void;
                configureAnimation(configurationObject: Object): void;
                getAnimationState(): PerfectWidgets.Model.Animation.AnimationState;
                setAnimationState(state: PerfectWidgets.Model.Animation.AnimationState): void;
                getAnimationValue(): number;
                setAnimationValue(animationValue: number): void;
                onAnimationStarting(): boolean;
                onAnimationFinished(): void;
                onAnimationValueChanged(): void;
            }
            export class AbstractAnimation {
                getContext(): PerfectWidgets.Model.Animation.IAnimatable;
                setContext(context: PerfectWidgets.Model.Animation.IAnimatable): void;
                getDuration(): number;
                setDuration(duration: number): void;
                getEasingFunction(): string;
                setEasingFunction(easingFunction: string): void;
                getValueRange(): number;
                setValueRange(valueRangeValue: number): void;
                getStartValue(): number;
                setStartValue(startValue: number): void;
                getEndValue(): number;
                setEndValue(endValue: number): void;
                getPropertyName(): string;
                setPropertyName(setterMethodName: string): void;
                animate(): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter): void;
                getAvaliableEasingFunctions(): string[];
                disposeAnimation(): void;
            }
            export class ManualAnimation extends PerfectWidgets.Model.Animation.AbstractAnimation {
                getAvaliableEasingFunctions(): string[];
                animate(): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter): void;
                disposeAnimation(): void;
                constructor();
            }
        }
        export module BaseElements {
            export class WidgetElement {
                add_Recalculating(value: any): void;
                remove_Recalculating(value: any): void;
                getReady(): boolean;
                getBreakEventsBubbling(): boolean;
                setBreakEventsBubbling(BreakEventsBubblingValue: boolean): void;
                getName(): string;
                setName(NameValue: string): void;
                getClassName(): string;
                setClassName(className: string): void;
                getSuffix(): string;
                setSuffix(suffix: string): void;
                getFullName(): string;
                getTransformation(): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                setTransformation(transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): void;
                getGuid(): string;
                getActive(): boolean;
                setActive(ActiveValue: boolean): void;
                getParent(): PerfectWidgets.Model.BaseElements.Composite;
                isJointChild(): boolean;
                setParent(ParentValue: PerfectWidgets.Model.BaseElements.Composite): void;
                getInstrument(): PerfectWidgets.Model.BaseElements.Instrument;
                getFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFill(FillValue: PerfectWidgets.Framework.Drawing.Fill): void;
                getStroke(): PerfectWidgets.Framework.Drawing.Stroke;
                setStroke(stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getVisible(): boolean;
                setVisible(VisibleValue: boolean): void;
                getNeedRepaint(): boolean;
                setNeedRepaint(need: boolean): void;
                isBindingEnabled(): boolean;
                bindingEnabled(enabled: boolean): void;
                recalculate(): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                paint(painter: PerfectWidgets.Model.Drawing.IPainter): void;
                totallRefreshElement(): void;
                getRecalculateAll(): boolean;
                setRecalculateAll(recalculateAllValue: boolean): void;
                refreshElement(): void;
                setInvalidationHandler(handler: PerfectWidgets.Model.BaseElements.InvalidationEventHandler): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getElementAt(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Model.BaseElements.WidgetElement;
                doMouseDown(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                doMouseLeave(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                doMouseEnter(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                doMouseMove(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                doMouseUp(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                setMouseDownHandler(handler: PerfectWidgets.Model.Manipulator.ManipulationEventHandler): void;
                setMouseLeaveHandler(handler: PerfectWidgets.Model.Manipulator.ManipulationEventHandler): void;
                setMouseEnterHandler(handler: PerfectWidgets.Model.Manipulator.ManipulationEventHandler): void;
                setMouseMoveHandler(handler: PerfectWidgets.Model.Manipulator.ManipulationEventHandler): void;
                setMouseUpHandler(handler: PerfectWidgets.Model.Manipulator.ManipulationEventHandler): void;
                getByName(name: string): PerfectWidgets.Model.BaseElements.WidgetElement;
                static getByType(instrument: PerfectWidgets.Model.BaseElements.WidgetElement, type: any): PerfectWidgets.Model.BaseElements.WidgetElement[];
                getToolTipValue(): string;
                setToolTipValue(toolTipValueValue: string): void;
                getToolTipElement(): PerfectWidgets.Model.BaseElements.ToolTipElement;
                setToolTipElement(toolTipElementValue: PerfectWidgets.Model.BaseElements.ToolTipElement): void;
                getStyle(): string;
                setStyle(styleValue: string): void;
                getStyleByName(name: string): PerfectWidgets.Framework.Styles.Style;
                getCurrentStyle(): PerfectWidgets.Framework.Styles.Style;
                constructor();
            }
            export class SimpleRectangleElement extends PerfectWidgets.Model.BaseElements.WidgetElement {
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenter(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getSize(): PerfectWidgets.Framework.DataObjects.Vector;
                setSize(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getWidth(): number;
                setWidth(value: number): void;
                getHeight(): number;
                setHeight(value: number): void;
                getBounds(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                setBounds(value: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
            }
            export class RectangleElement extends PerfectWidgets.Model.BaseElements.SimpleRectangleElement {
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getAngle(): number;
                setAngle(value: number): void;
            }
            export class ArcBase extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getStartAngle(): number;
                setStartAngle(startAngleValue: number): void;
                getSweepAngle(): number;
                setSweepAngle(sweepAngleValue: number): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            export class Arc extends PerfectWidgets.Model.BaseElements.ArcBase {
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class BevelElement extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getBevel(): PerfectWidgets.Model.BaseElements.Bevel;
                setBevel(bevelValue: PerfectWidgets.Model.BaseElements.Bevel): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            export class Composite extends PerfectWidgets.Model.BaseElements.WidgetElement {
                getElements(): PerfectWidgets.Model.BaseElements.ElementsCollection;
                setClassName(className: string): void;
                getByName(name: string): PerfectWidgets.Model.BaseElements.WidgetElement;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                add_NeedRepaintChanged(value: any): void;
                remove_NeedRepaintChanged(value: any): void;
                setNeedRepaint(need: boolean): void;
                getElementAt(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Model.BaseElements.WidgetElement;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class ButtonBase extends PerfectWidgets.Model.BaseElements.Composite {
                getOn(): boolean;
                getPressed(): boolean;
                getHot(): boolean;
            }
            export class Circle extends PerfectWidgets.Model.BaseElements.WidgetElement {
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenter(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getRadius(): number;
                setRadius(value: number): void;
                constructor();
            }
            export class CircularShape extends PerfectWidgets.Model.BaseElements.WidgetElement {
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenter(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getRadius(): number;
                setRadius(value: number): void;
                getAngle(): number;
                setAngle(value: number): void;
            }
            export class CircularNotches extends PerfectWidgets.Model.BaseElements.CircularShape {
                getLength(): number;
                setLength(lengthValue: number): void;
                getLightColor(): PerfectWidgets.Framework.Drawing.Color;
                setLightColor(lightColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getDarkColor(): PerfectWidgets.Framework.Drawing.Color;
                setDarkColor(darkColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getCount(): number;
                setCount(countValue: number): void;
                getNotchesStyle(): PerfectWidgets.Model.BaseElements.NotchesStyle;
                setNotchesStyle(notchesStyleValue: PerfectWidgets.Model.BaseElements.NotchesStyle): void;
                getWidth(): number;
                setWidth(widthValue: number): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class Colorizer {
                getColor(portion: number): PerfectWidgets.Framework.Drawing.Color;
            }
            export class CornerRadiuses {
                static getCornerRadiuses(leftBottom: number, leftTop: number, rightTop: number, rightBottom: number): PerfectWidgets.Model.BaseElements.CornerRadiuses;
                getLeftTop(): number;
                setLeftTop(leftTopValue: number): void;
                getLeftBottom(): number;
                setLeftBottom(leftBottomValue: number): void;
                getRightTop(): number;
                setRightTop(rightTopValue: number): void;
                getRightBottom(): number;
                setRightBottom(rightBottomValue: number): void;
                constructor();
            }
            export class Bevel {
                paint(rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle, stream: PerfectWidgets.Model.Drawing.IPainter): void;
                getDockingBounds(rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getLightAngle(): number;
                setLightAngle(lightAngleValue: number): void;
                getLightOpacity(): number;
                setLightOpacity(lightOpacityValue: number): void;
                context: PerfectWidgets.Model.BaseElements.WidgetElement;
            }
            export class CustomBevel extends PerfectWidgets.Model.BaseElements.Bevel {
                getUpOffset(): number;
                setUpOffset(upOffsetValue: number): void;
                getDownOffset(): number;
                setDownOffset(downOffsetValue: number): void;
                getShadowSize(): number;
                setShadowSize(shadowSizeValue: number): void;
                getFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFill(fillValue: PerfectWidgets.Framework.Drawing.Fill): void;
                getStroke(): PerfectWidgets.Framework.Drawing.Stroke;
                setStroke(strokeValue: PerfectWidgets.Framework.Drawing.Stroke): void;
                getInnerStroke(): PerfectWidgets.Framework.Drawing.Stroke;
                setInnerStroke(innerStrokeValue: PerfectWidgets.Framework.Drawing.Stroke): void;
                getMargins(): PerfectWidgets.Framework.Drawing.Margins;
                setMargins(marginsValue: PerfectWidgets.Framework.Drawing.Margins): void;
                getPadding(): PerfectWidgets.Framework.Drawing.Margins;
                setPadding(paddingValue: PerfectWidgets.Framework.Drawing.Margins): void;
                getBevelShadow(): PerfectWidgets.Model.BaseElements.Shadow;
                setBevelShadow(bevelShadowValue: PerfectWidgets.Model.BaseElements.Shadow): void;
                getRadiuses(): PerfectWidgets.Model.BaseElements.CornerRadiuses;
                setRadiuses(radiusesValue: PerfectWidgets.Model.BaseElements.CornerRadiuses): void;
                getInnerRadiuses(): PerfectWidgets.Model.BaseElements.CornerRadiuses;
                setInnerRadiuses(innerRadiusesValue: PerfectWidgets.Model.BaseElements.CornerRadiuses): void;
                paint(rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle, painter: PerfectWidgets.Model.Drawing.IPainter): void;
                getDockingBounds(rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                clone(): Object;
                constructor();
            }
            export class DigitalText extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getText(): string;
                setText(text: string): void;
                getSegmentSize(): PerfectWidgets.Framework.DataObjects.Vector;
                setSegmentSize(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getSegmentSpaces(): PerfectWidgets.Framework.DataObjects.Vector;
                setSegmentSpaces(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getFont(): PerfectWidgets.Framework.Drawing.Font;
                setFont(font: PerfectWidgets.Framework.Drawing.Font): void;
                resetFont(): void;
                getActiveColor(): PerfectWidgets.Framework.Drawing.Color;
                setActiveColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getInactiveColor(): PerfectWidgets.Framework.Drawing.Color;
                setInactiveColor(color: PerfectWidgets.Framework.Drawing.Color): void;
                getDigitalBackgroundVisible(): boolean;
                setDigitalBackgroundVisible(b: boolean): void;
                getTextVerticalOffset(): number;
                setTextVerticalOffset(offset: number): void;
                getTextHorizontalOffset(): number;
                setTextHorizontalOffset(offset: number): void;
                addRectangle(path: PerfectWidgets.Framework.Drawing.GraphicsPath, rect: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
                constructor();
            }
            export class Frame extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getInnerColor(): PerfectWidgets.Framework.Drawing.Color;
                setInnerColor(innerColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getOuterColor(): PerfectWidgets.Framework.Drawing.Color;
                setOuterColor(outerColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getDarkColor(): PerfectWidgets.Framework.Drawing.Color;
                setDarkColor(darkColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getLightColor(): PerfectWidgets.Framework.Drawing.Color;
                setLightColor(lightColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getBevelStyle(): PerfectWidgets.Model.BaseElements.BevelStyle;
                setBevelStyle(bevelStyleValue: PerfectWidgets.Model.BaseElements.BevelStyle): void;
                getFixedLineWidth(): number;
                getLineWidth(): number;
                setLineWidth(lineWidthValue: number): void;
                constructor();
            }
            enum BevelStyle {
                None = 0,
                Flat = 1,
                Single = 2,
                Doubled = 3,
                Raised = 4,
                Lowered = 5,
                DoubleRaised = 6,
                DoubleLowered = 7,
                FrameRaised = 8,
                FrameLowered = 9
            }
            export class Group extends PerfectWidgets.Model.BaseElements.Composite {
                constructor();
            }
            export class LineElement extends PerfectWidgets.Model.BaseElements.WidgetElement {
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getStartPoint(): PerfectWidgets.Framework.DataObjects.Vector;
                setStartPoint(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getEndPoint(): PerfectWidgets.Framework.DataObjects.Vector;
                setEndPoint(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getCenterPoint(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenterPoint(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                getCenterPart(): number;
                setCenterPart(value: number): void;
                getAngle(): number;
            }
            export class LinearNotches extends PerfectWidgets.Model.BaseElements.LineElement {
                getLength(): number;
                setLength(lengthValue: number): void;
                getLightColor(): PerfectWidgets.Framework.Drawing.Color;
                setLightColor(lightColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getDarkColor(): PerfectWidgets.Framework.Drawing.Color;
                setDarkColor(darkColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getCount(): number;
                setCount(countValue: number): void;
                getNotchesStyle(): PerfectWidgets.Model.BaseElements.NotchesStyle;
                setNotchesStyle(notchesStyleValue: PerfectWidgets.Model.BaseElements.NotchesStyle): void;
                getWidth(): number;
                setWidth(widthValue: number): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            enum NotchesStyle {
                Raised = 0,
                Lowered = 1,
                Flat = 2
            }
            export class Odometer extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getFirstDigitForeFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFirstDigitForeFill(fill: PerfectWidgets.Framework.Drawing.Fill): void;
                getFirstDigitBackFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFirstDigitBackFill(fill: PerfectWidgets.Framework.Drawing.Fill): void;
                getBackFill(): PerfectWidgets.Framework.Drawing.Fill;
                setBackFill(fill: PerfectWidgets.Framework.Drawing.Fill): void;
                getForeFill(): PerfectWidgets.Framework.Drawing.Fill;
                setForeFill(fill: PerfectWidgets.Framework.Drawing.Fill): void;
                getFont(): PerfectWidgets.Framework.Drawing.Font;
                setFont(font: PerfectWidgets.Framework.Drawing.Font): void;
                resetFont(): void;
                getValue(): number;
                setValue(value: number): void;
                constructor();
            }
            export class Digits extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getText(): string;
                setText(textValue: string): void;
                getDigitPainter(): PerfectWidgets.Model.Drawing.DigitPainter;
                setDigitPainter(digitPainterValue: PerfectWidgets.Model.Drawing.DigitPainter): void;
                getDigitWidth(): number;
                setDigitWidth(digitWidthValue: number): void;
                getDigitHeight(): number;
                setDigitHeight(digitHeightValue: number): void;
                getDigitSpace(): number;
                setDigitSpace(digitSpaceValue: number): void;
                getSegmentThickness(): number;
                setSegmentThickness(segmentThicknessValue: number): void;
                getSegmentSpace(): number;
                setSegmentSpace(segmentSpaceValue: number): void;
                getActiveColor(): PerfectWidgets.Framework.Drawing.Color;
                setActiveColor(activeColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getInactiveColor(): PerfectWidgets.Framework.Drawing.Color;
                setInactiveColor(inactiveColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getOverhang(): number;
                setOverhang(overhangValue: number): void;
                getSkew(): number;
                setSkew(skewValue: number): void;
                getStyleID(): number;
                setStyleID(styleIDValue: number): void;
                constructor();
            }
            enum SegmentType {
                None = 0,
                Top = 1,
                Bottom = 2,
                LeftTop = 4,
                RightTop = 8,
                LeftBottom = 16,
                RightBottom = 32,
                Middle = 64,
                All = 127
            }
            export class PushButton extends PerfectWidgets.Model.BaseElements.ButtonBase {
                addOnClickHandler(handler: any): void;
                removeOnClickHandler(handler: any): void;
                constructor();
            }
            export interface IScaleElement {
                getSize(): number;
                setStartDistance(distance: number): void;
                getPadding(): number;
                getDock(): PerfectWidgets.Model.BaseElements.ScaleDocking;
                getVisible(): boolean;
                getFixShift(): number;
                resetMeasure(): void;
            }
            export class ScaleElement extends PerfectWidgets.Model.BaseElements.WidgetElement {
                getScale(): PerfectWidgets.Model.BaseElements.IScale;
                getColorizer(): PerfectWidgets.Model.BaseElements.Colorizer;
                setColorizer(value: PerfectWidgets.Model.BaseElements.Colorizer): void;
                shouldSerializeColorizer(): boolean;
                resetColorizer(): void;
                getDistance(): number;
                setDistance(value: number): void;
                getMinLimit(): PerfectWidgets.Model.BaseElements.SmartValue;
                setMinLimit(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                getMaxLimit(): PerfectWidgets.Model.BaseElements.SmartValue;
                setMaxLimit(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                getPadding(): number;
                setPadding(value: number): void;
                getDock(): PerfectWidgets.Model.BaseElements.ScaleDocking;
                setDock(value: PerfectWidgets.Model.BaseElements.ScaleDocking): void;
                getFixShift(): number;
                getOrigin(): PerfectWidgets.Model.BaseElements.SmartValue;
                setOrigin(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                getColor(value: number): PerfectWidgets.Framework.Drawing.Color;
                isPaint(value: number): boolean;
                static getStartValue(scale: PerfectWidgets.Model.BaseElements.IScale, origin: PerfectWidgets.Model.BaseElements.SmartValue, length: number): number;
                getSize(): number;
                setStartDistance(distance: number): void;
                resetMeasure(): void;
                static getRoundLabelsStep(maximum: number, minimum: number, divisions: number): number;
            }
            export class ValuePresenterScaleElement extends PerfectWidgets.Model.BaseElements.ScaleElement {
                getValue(): PerfectWidgets.Model.BaseElements.SmartValue;
                setValue(val: Object): void;
                getAnimationValue(): PerfectWidgets.Model.BaseElements.SmartValue;
                setAnimationValue(val: Object): void;
            }
            export class LevelBase extends PerfectWidgets.Model.BaseElements.ValuePresenterScaleElement {
                getDivisions(): number;
                setDivisions(divisionsValue: number): void;
                getDivisionsStroke(): PerfectWidgets.Framework.Drawing.Stroke;
                setDivisionsStroke(stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getStartColor(): PerfectWidgets.Framework.Drawing.Color;
                setStartColor(startColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getEndColor(): PerfectWidgets.Framework.Drawing.Color;
                setEndColor(endColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getColors(): PerfectWidgets.Framework.Drawing.GradientColorCollection;
                setColors(colors: PerfectWidgets.Framework.Drawing.GradientColorCollection): void;
            }
            export class RangedLevel extends PerfectWidgets.Model.BaseElements.LevelBase {
                getAlignmentMode(): PerfectWidgets.Model.BaseElements.AlignmentMode;
                setAlignmentMode(AlignmentModeValue: PerfectWidgets.Model.BaseElements.AlignmentMode): void;
                getStartWidth(): number;
                setStartWidth(startWidthValue: number): void;
                getEndWidth(): number;
                setEndWidth(endWidthValue: number): void;
                getSize(): number;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            enum AlignmentMode {
                Far = 0,
                Near = 1,
                Center = 2
            }
            export class ScaleMarksBase extends PerfectWidgets.Model.BaseElements.ScaleElement {
                getDivisions(): number;
                setDivisions(value: number): void;
                getSubDivisions(): number;
                setSubDivisions(value: number): void;
                getSubTicksPosition(): PerfectWidgets.Model.BaseElements.SubTicksPosition;
                setSubTicksPosition(value: PerfectWidgets.Model.BaseElements.SubTicksPosition): void;
                isDiscreteValues(): boolean;
                usiDiscretreValue(discrete: boolean): void;
                getStep(): PerfectWidgets.Model.BaseElements.SmartValue;
                setStep(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                isRoundValues(): boolean;
                useRoundValue(round: boolean): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
            }
            export class ScaleMarks extends PerfectWidgets.Model.BaseElements.ScaleMarksBase {
                getMarksSize(): PerfectWidgets.Framework.DataObjects.Vector;
                getFixShift(): number;
                setMarksSize(marksSize: PerfectWidgets.Framework.DataObjects.Vector): void;
                getSubMarksSize(): PerfectWidgets.Framework.DataObjects.Vector;
                setSubMarksSize(subMarksSize: PerfectWidgets.Framework.DataObjects.Vector): void;
                getShape(): PerfectWidgets.Model.BaseElements.ShapeBase;
                setShape(shape: PerfectWidgets.Model.BaseElements.ShapeBase): void;
                getRotationMode(): PerfectWidgets.Model.BaseElements.TextRotationMode;
                setRotationMode(mode: PerfectWidgets.Model.BaseElements.TextRotationMode): void;
                getMarksAngle(): number;
                setMarksAngle(marksAngle: number): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getSize(): number;
                constructor();
            }
            export class ScaleLabelsBase extends PerfectWidgets.Model.BaseElements.ScaleElement {
                getFont(): PerfectWidgets.Framework.Drawing.Font;
                setFont(value: PerfectWidgets.Framework.Drawing.Font): void;
                resetFont(): void;
                getTextRotationMode(): PerfectWidgets.Model.BaseElements.TextRotationMode;
                setTextRotationMode(value: PerfectWidgets.Model.BaseElements.TextRotationMode): void;
                getFormat(): PerfectWidgets.Model.BaseElements.TextFormat;
                setFormat(format: PerfectWidgets.Model.BaseElements.TextFormat): void;
                getTextAngle(): number;
                setTextAngle(value: number): void;
                getOddLabelsDistance(): number;
                setOddLabelsDistance(value: number): void;
                getItemMargins(): PerfectWidgets.Framework.Drawing.Margins;
                setItemMargins(value: PerfectWidgets.Framework.Drawing.Margins): void;
                getPosition(): PerfectWidgets.Model.BaseElements.LabelPosition;
                setPosition(value: PerfectWidgets.Model.BaseElements.LabelPosition): void;
                getTextAlignment(): PerfectWidgets.Model.BaseElements.StringAlignment;
                setTextAlignment(value: PerfectWidgets.Model.BaseElements.StringAlignment): void;
                getSize(): number;
                getShowSuperposableLabels(): boolean;
                setShowSuperposableLabels(value: boolean): void;
                getLabelsCount(): number;
                getValueByIndex(index: number): number;
                getObjectByIndex(index: number): Object;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                setStartDistance(distance: number): void;
                resetMeasure(): void;
            }
            export class ScaleTitle extends PerfectWidgets.Model.BaseElements.ScaleLabelsBase {
                getText(): string;
                setText(textValue: string): void;
                getLabelsCount(): number;
                getObjectByIndex(index: number): Object;
                getValueByIndex(index: number): number;
                constructor();
            }
            export class Shadow {
                static blankShadow(): PerfectWidgets.Model.BaseElements.Shadow;
                static shadowFromProto(prototype: PerfectWidgets.Model.BaseElements.Shadow): PerfectWidgets.Model.BaseElements.Shadow;
                getFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFill(fillValue: PerfectWidgets.Framework.Drawing.Fill): void;
                getDX(): number;
                setDX(dxValue: number): void;
                getDY(): number;
                setDY(dyValue: number): void;
                toString(): string;
                clone(): Object;
                equals(obj: Object): boolean;
                constructor(dx: number, dy: number, fill?: PerfectWidgets.Framework.Drawing.Fill);
            }
            export class ShapeBase {
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                buildShapePath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                toString(): string;
                static registerShape(shapeType: any): void;
                static register(): void;
            }
            export class RectangleShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class EllipseShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class RoundRectangleShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getRound(): number;
                setRound(roundValue: number): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            enum ShapeDirection {
                Up = 0,
                Down = 1,
                Left = 2,
                Right = 3
            }
            export class TriangleShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getDirection(): PerfectWidgets.Model.BaseElements.ShapeDirection;
                setDirection(shapeDirectionValue: PerfectWidgets.Model.BaseElements.ShapeDirection): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class ArrowShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getDirection(): PerfectWidgets.Model.BaseElements.ShapeDirection;
                setDirection(shapeDirectionValue: PerfectWidgets.Model.BaseElements.ShapeDirection): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class RectTriangleShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getDirection(): PerfectWidgets.Model.BaseElements.ShapeDirection;
                setDirection(shapeDirectionValue: PerfectWidgets.Model.BaseElements.ShapeDirection): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class DiamondShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class ParallelogramShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getAngle(): number;
                setAngle(angleValue: number): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class StarShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getInternalRadius(): number;
                setInternalRadius(internalRadiusValue: number): void;
                getPoints(): number;
                setPoints(pointsValue: number): void;
                getStartAngle(): number;
                setStartAngle(startAngleValue: number): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class CrossShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getVertice(location: PerfectWidgets.Framework.DataObjects.Vector, size: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector[];
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            enum LineDirection {
                Slash = 0,
                BackSlash = 1
            }
            export class LineShape extends PerfectWidgets.Model.BaseElements.ShapeBase {
                getLineKind(): PerfectWidgets.Model.BaseElements.LineDirection;
                setLineKind(lineKindValue: PerfectWidgets.Model.BaseElements.LineDirection): void;
                createPath(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation): PerfectWidgets.Framework.Drawing.GraphicsPath;
                constructor();
            }
            export class LinearLevel extends PerfectWidgets.Model.BaseElements.LevelBase {
                getEffect3D(): PerfectWidgets.Model.BaseElements.Effect3D;
                setEffect3D(effect3dValue: PerfectWidgets.Model.BaseElements.Effect3D): void;
                getWidth(): number;
                setWidth(widthValue: number): void;
                getStartCap(): PerfectWidgets.Model.BaseElements.CapStyle;
                setStartCap(startCapValue: PerfectWidgets.Model.BaseElements.CapStyle): void;
                getEndCap(): PerfectWidgets.Model.BaseElements.CapStyle;
                setEndCap(endCapValue: PerfectWidgets.Model.BaseElements.CapStyle): void;
                getShowAsThermometer(): boolean;
                setShowAsThermometer(showAsThermometerValue: boolean): void;
                getPocketRadius(): number;
                setPocketRadius(pocketRadiusValue: number): void;
                getSize(): number;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                static getWholePath(pocketRadius: number, width: number, startPoint: PerfectWidgets.Framework.DataObjects.Vector, length: number, needThermometer: boolean, asThermometer: boolean, startCap: PerfectWidgets.Model.BaseElements.CapStyle, endCap: PerfectWidgets.Model.BaseElements.CapStyle): PerfectWidgets.Framework.Drawing.GraphicsPath;
                drawLinearLevel(painter: PerfectWidgets.Model.Drawing.IPainter, wholeFill: PerfectWidgets.Framework.Drawing.Fill, wholeStroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                constructor();
            }
            enum Effect3D {
                Raised = 0,
                Lowered = 1,
                Flat = 2
            }
            enum CapStyle {
                Flat = 0,
                Rounded = 1
            }
            export class Spring extends PerfectWidgets.Model.BaseElements.LineElement {
                getAmplitude(): number;
                setAmplitude(amplitudeValue: number): void;
                getCoilsCount(): number;
                setCoilsCount(coilsCountValue: number): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            enum RectangleBevelDrawingStyle {
                Sharp = 0,
                Smooth = 1
            }
            export class StandardBevel extends PerfectWidgets.Model.BaseElements.Bevel {
                getDrawingStyle(): PerfectWidgets.Model.BaseElements.RectangleBevelDrawingStyle;
                setDrawingStyle(drawingStyleValue: PerfectWidgets.Model.BaseElements.RectangleBevelDrawingStyle): void;
                getUpOffset(): number;
                setUpOffset(upOffsetValue: number): void;
                getDownOffset(): number;
                setDownOffset(downOffsetValue: number): void;
                getFill(): PerfectWidgets.Framework.Drawing.Fill;
                setFill(fillValue: PerfectWidgets.Framework.Drawing.Fill): void;
                getStroke(): PerfectWidgets.Framework.Drawing.Stroke;
                setStroke(strokeValue: PerfectWidgets.Framework.Drawing.Stroke): void;
                getCornerRadius(): number;
                setCornerRadius(cornerRadiusValue: number): void;
                getMargins(): PerfectWidgets.Framework.Drawing.Margins;
                setMargins(marginsValue: PerfectWidgets.Framework.Drawing.Margins): void;
                getBevelShadow(): PerfectWidgets.Model.BaseElements.Shadow;
                setBevelShadow(bevelShadowValue: PerfectWidgets.Model.BaseElements.Shadow): void;
                paint(rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle, painter: PerfectWidgets.Model.Drawing.IPainter): void;
                getDockingBounds(rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            export class Tank extends PerfectWidgets.Model.BaseElements.ValuePresenterScaleElement {
                getEffect3D(): PerfectWidgets.Model.BaseElements.Effect3D;
                setEffect3D(effect3dValue: PerfectWidgets.Model.BaseElements.Effect3D): void;
                getLiquidColor(): PerfectWidgets.Framework.Drawing.Color;
                setLiquidColor(myVarValue: PerfectWidgets.Framework.Drawing.Color): void;
                getTankColor(): PerfectWidgets.Framework.Drawing.Color;
                setTankColor(tankColorValue: PerfectWidgets.Framework.Drawing.Color): void;
                getDepth(): number;
                setDepth(depthValue: number): void;
                getWidth(): number;
                setWidth(widthValue: number): void;
                getTankWidth(): number;
                setTankWidth(tankWidthValue: number): void;
                getFixShift(): number;
                getTankGraphicsPath(startPoint: PerfectWidgets.Framework.DataObjects.Vector, length: number, pathWidth: number, pathDepth: number, whole: boolean): PerfectWidgets.Framework.Drawing.GraphicsPath;
                getTankTopPath(endPoint: PerfectWidgets.Framework.DataObjects.Vector, depth: number, width: number, tankWidth: number): PerfectWidgets.Framework.Drawing.GraphicsPath;
                drawTank(painter: PerfectWidgets.Model.Drawing.IPainter, wholeFill: PerfectWidgets.Framework.Drawing.Fill): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getSize(): number;
                constructor();
                static minDepthValue: number;
            }
            export class TextFormat {
                getFormatStringMask(): string;
                setFormatStringMask(formatStringMask: string): void;
                constructor();
            }
            export class Rectangle extends PerfectWidgets.Model.BaseElements.RectangleElement {
                constructor();
            }
            export class ToolTipElement extends PerfectWidgets.Model.BaseElements.Rectangle {
                getNeedToolTip(): boolean;
                setNeedToolTip(needToolTipValue: boolean): void;
                getCurrentText(): string;
                setCurrentText(currentTextValue: string): void;
                getLocation(): PerfectWidgets.Framework.DataObjects.Vector;
                setLocation(locationValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                constructor();
            }
            export class TrialLabel extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getMargins(): PerfectWidgets.Framework.Drawing.Margins;
                setMargins(marginsValue: PerfectWidgets.Framework.Drawing.Margins): void;
                getTextAlign(): PerfectWidgets.Framework.Drawing.ContentAlignment;
                setTextAlign(textAlignValue: PerfectWidgets.Framework.Drawing.ContentAlignment): void;
                getFont(): PerfectWidgets.Framework.Drawing.Font;
                setFont(font: PerfectWidgets.Framework.Drawing.Font): void;
                getText(): string;
                setText(textValue: string): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class CustomLabels extends PerfectWidgets.Model.BaseElements.ScaleLabelsBase {
                getLabels(): PerfectWidgets.Model.BaseElements.TextItem[];
                setLabels(labels: PerfectWidgets.Model.BaseElements.TextItem[]): void;
                getLabelsCount(): number;
                getObjectByIndex(index: number): Object;
                getValueByIndex(index: number): number;
                constructor();
            }
            export interface ITrajectory {
                portionToTransformation(portion: number): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                percentToPoint(portion: number, radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                pointToPercent(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                getStartDistance(): number;
            }
            export class DockableTrajectoryBase extends PerfectWidgets.Model.BaseElements.Composite {
                portionToTransformation(portion: number): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                percentToPoint(portion: number, radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                pointToPercent(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                getStartDistance(): number;
                getMargins(): PerfectWidgets.Framework.Drawing.Margins;
                setMargin(value: PerfectWidgets.Framework.Drawing.Margins): void;
            }
            export class Ellipse extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class Gear extends PerfectWidgets.Model.BaseElements.CircularShape {
                getCount(): number;
                setCount(count: number): void;
                getDepth(): number;
                setDepth(depth: number): void;
                getDimensionsRatio(): number;
                setDimensionsRatio(ratio: number): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            export class Guide extends PerfectWidgets.Model.BaseElements.DockableTrajectoryBase {
                getStartPoint(): PerfectWidgets.Framework.DataObjects.Vector;
                setStartPoint(startPointValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                getEndPoint(): PerfectWidgets.Framework.DataObjects.Vector;
                setEndPoint(endPointValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                getGuideDirection(): PerfectWidgets.Model.BaseElements.GuideDirection;
                setGuideDirection(guideDirectionValue: PerfectWidgets.Model.BaseElements.GuideDirection): void;
                getAlign(): PerfectWidgets.Model.BaseElements.AlignmentMode;
                setAlign(alignValue: PerfectWidgets.Model.BaseElements.AlignmentMode): void;
                percentToPoint(portion: number, radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                pointToPercent(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                portionToTransformation(portion: number): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                getStartDistance(): number;
                constructor();
            }
            enum GuideDirection {
                Free = 0,
                BottomToTop = 1,
                TopToBottom = 2,
                LeftToRight = 3,
                RightToLeft = 4
            }
            export class Highlight extends PerfectWidgets.Model.BaseElements.CircularShape {
                getSweepAngle(): number;
                setSweepAngle(sweepAngleValue: number): void;
                getK(): number;
                setK(kValue: number): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            export interface ILinkedSupported {
                getRadius(point: PerfectWidgets.Framework.DataObjects.Vector): number;
            }
            export class InvalidationEventHandler {
                invoke(sender: Object, args: any): void;
                constructor(object: Object, method: any);
            }
            enum ScaleKind {
                ExcludeMinimum = 0,
                ExcludeMaximum = 1,
                IncludeBoth = 1
            }
            export interface IScale {
                valueToPoint(value: number, radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                pointToValue(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                getColorizer(): PerfectWidgets.Model.BaseElements.Colorizer;
                getMinimum(): number;
                setMinimum(value: number): void;
                getMaximum(): number;
                setMaximum(value: number): void;
                percentToValue(percent: number): number;
                valueToPercent(value: number): number;
                fromRealValue(value: Object): number;
                toRealValue(value: number): Object;
                isDiscrete(): boolean;
                getDiscreteValuesCount(): number;
                getDiscreteValue(index: number): Object;
                getTrajectory(): PerfectWidgets.Model.BaseElements.ITrajectory;
            }
            enum ScaleDocking {
                None = 0,
                Inside = 1,
                Outside = 2,
                Center = 3
            }
            export interface ISlider {
                getPosition(radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                getValue(): number;
                getMinLimit(): PerfectWidgets.Model.BaseElements.SmartValue;
                getMaxLimit(): PerfectWidgets.Model.BaseElements.SmartValue;
            }
            export class Joint extends PerfectWidgets.Model.BaseElements.DockableTrajectoryBase {
                getCenter(): PerfectWidgets.Framework.DataObjects.Vector;
                setCenter(value: PerfectWidgets.Framework.DataObjects.Vector): void;
                portionToTransformation(portion: number): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                getStartAngle(): number;
                setStartAngle(value: number): void;
                getTotalAngle(): number;
                setTotalAngle(value: number): void;
                getRadius(): number;
                setRadius(value: number): void;
                getDock(): PerfectWidgets.Model.BaseElements.JointDocking;
                setDock(value: PerfectWidgets.Model.BaseElements.JointDocking): void;
                getStartDistance(): number;
                percentToPoint(portion: number, radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                pointToPercent(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getObject(name: string): Object;
                constructor();
            }
            enum JointDocking {
                None = 0,
                Center = 1,
                Left = 2,
                Right = 3,
                Top = 4,
                Bottom = 5,
                LeftBottom = 6,
                LeftTop = 7,
                RightBottom = 8,
                RightTop = 9
            }
            export class Label extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getMargins(): PerfectWidgets.Framework.Drawing.Margins;
                setMargins(marginsValue: PerfectWidgets.Framework.Drawing.Margins): void;
                getTextAlign(): PerfectWidgets.Framework.Drawing.ContentAlignment;
                setTextAlign(textAlignValue: PerfectWidgets.Framework.Drawing.ContentAlignment): void;
                getFont(): PerfectWidgets.Framework.Drawing.Font;
                setFont(font: PerfectWidgets.Framework.Drawing.Font): void;
                getText(): string;
                setText(textValue: string): void;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                constructor();
            }
            export class LabelInfo {
                get_Text(): string;
                get_Value(): number;
                get_TextSize(): PerfectWidgets.Framework.DataObjects.Vector;
                constructor(text: string, value: number, textSize?: PerfectWidgets.Framework.DataObjects.Vector);
                Text: string;
                Value: number;
                TextSize: PerfectWidgets.Framework.DataObjects.Vector;
            }
            export class Line extends PerfectWidgets.Model.BaseElements.LineElement {
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            enum ShowMode {
                ShowBoth = 0,
                ShowLeft = 1,
                ShowRigth = 2
            }
            export class CalculatePosition {
                invoke(sender: Object, e: any): PerfectWidgets.Framework.DataObjects.Vector;
                constructor(object: Object, method: any);
            }
            export class Needle extends PerfectWidgets.Model.BaseElements.LineElement {
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getStartWidth(): number;
                setStartWidth(value: number): void;
                getEndWidth(): number;
                setEndWidth(value: number): void;
                getShowMode(): PerfectWidgets.Model.BaseElements.ShowMode;
                setShowMode(value: PerfectWidgets.Model.BaseElements.ShowMode): void;
                getNeedlePoints(): PerfectWidgets.Model.BaseElements.NeedlePoint[];
                setNeedlePoints(points: PerfectWidgets.Model.BaseElements.NeedlePoint[]): void;
                constructor();
            }
            export class NeedlePoint {
                setPortion(portion: number): void;
                setWidth(width: number): void;
                constructor();
                portion: number;
                width: number;
            }
            export class NeedlePointCollection {
                add(value: PerfectWidgets.Model.BaseElements.NeedlePoint): PerfectWidgets.Model.BaseElements.NeedlePoint;
                addRange(values: PerfectWidgets.Model.BaseElements.NeedlePoint[]): void;
                remove(value: PerfectWidgets.Model.BaseElements.NeedlePoint): void;
                insert(index: number, value: PerfectWidgets.Model.BaseElements.NeedlePoint): void;
                contains(value: PerfectWidgets.Model.BaseElements.NeedlePoint): boolean;
                indexOf(value: PerfectWidgets.Model.BaseElements.NeedlePoint): number;
                get_Item(index: number): PerfectWidgets.Model.BaseElements.NeedlePoint;
                set_Item(index: number, value: PerfectWidgets.Model.BaseElements.NeedlePoint): void;
                count(): number;
                constructor();
                Item: PerfectWidgets.Model.BaseElements.NeedlePoint;
            }
            export class Picture extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getImage(): PerfectWidgets.Framework.Drawing.Image;
                setImage(value: PerfectWidgets.Framework.Drawing.Image): void;
                resetImage(): void;
                setStyle(styleValue: string): void;
                constructor();
            }
            export class PictureSet extends PerfectWidgets.Model.BaseElements.RectangleElement {
                getImages(): PerfectWidgets.Framework.Drawing.Image[];
                setImages(images: PerfectWidgets.Framework.Drawing.Image[]): void;
                getImageIndex(): number;
                setImageIndex(index: number): void;
                constructor();
            }
            export class Pie extends PerfectWidgets.Model.BaseElements.ArcBase {
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class Polygon extends PerfectWidgets.Model.BaseElements.CircularShape {
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getSides(): number;
                setSides(value: number): void;
                constructor();
            }
            export class PropertyEventHandler {
                invoke(sender: Object, args: PerfectWidgets.Model.BaseElements.PropertyEventArgs): void;
                constructor(object: Object, method: any);
            }
            export class PropertyEventArgs {
                constructor();
                static empty: PerfectWidgets.Model.BaseElements.PropertyEventArgs;
            }
            export class RingSector extends PerfectWidgets.Model.BaseElements.ArcBase {
                getInternalRadius(): number;
                setInternalRadius(internalRadiusValue: number): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class RoundedRectangle extends PerfectWidgets.Model.BaseElements.Rectangle {
                getRadius(): number;
                setRadius(radiusValue: number): void;
                constructor();
            }
            export class RoundedVectorRectangle extends PerfectWidgets.Model.BaseElements.Rectangle {
                getRadiusX(): number;
                setRadiusX(rx: number): void;
                getRadiusY(): number;
                setRadiusY(ry: number): void;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class Scale extends PerfectWidgets.Model.BaseElements.Composite {
                getColorizer(): PerfectWidgets.Model.BaseElements.Colorizer;
                setColorizer(value: PerfectWidgets.Model.BaseElements.Colorizer): void;
                calculateTransformationInfo(value: number): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                getTrajectory(): PerfectWidgets.Model.BaseElements.ITrajectory;
                getMinimum(): number;
                setMinimum(value: number): void;
                getMaximum(): number;
                setMaximum(value: number): void;
                getReverse(): boolean;
                setReverse(value: boolean): void;
                percentToValue(percent: number): number;
                valueToPercent(value: number): number;
                valueToPoint(value: number, radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                pointToValue(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                fromRealValue(value: Object): number;
                toRealValue(value: number): Object;
                isDiscrete(): boolean;
                getDiscreteValuesCount(): number;
                getDiscreteValue(index: number): Object;
                getObject(name: string): Object;
                constructor();
            }
            export class ScaleLabels extends PerfectWidgets.Model.BaseElements.ScaleLabelsBase {
                getDivisions(): number;
                setDivisions(divisions: number): void;
                getStep(): PerfectWidgets.Model.BaseElements.SmartValue;
                setStep(step: PerfectWidgets.Model.BaseElements.SmartValue): void;
                getUseRoundValues(): boolean;
                setUseRoundValues(useRoundValues: boolean): void;
                getLabelsCount(): number;
                getValueByIndex(index: number): number;
                getObjectByIndex(index: number): Object;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                constructor();
            }
            enum TextRotationMode {
                Screen = 0,
                Scale = 1
            }
            enum LabelPosition {
                Near = 0,
                Center = 1,
                Far = 2
            }
            export class SliderBase extends PerfectWidgets.Model.BaseElements.Composite {
                getValue(): number;
                setValue(newValue: number, isAnimatable: boolean): void;
                getAnimationValue(): number;
                setAnimationValue(animationValue: number): void;
                animate(startValue: number, endValue: number): void;
                getAnimationDirection(): PerfectWidgets.Framework.DataObjects.RotationDirection;
                addValueChangingHandler(handler: PerfectWidgets.Model.BaseElements.ValueChangingHandler): void;
                removeValueChangingHandler(handler: PerfectWidgets.Model.BaseElements.ValueChangingHandler): void;
                addValueChangedHandler(handler: any): void;
                removeValueChangedHandler(handler: any): void;
                addAnimationValueChangedHandler(handler: any): void;
                removeAnimationValueChangedHandler(handler: any): void;
                addAnimationStartingHandler(handler: any): void;
                removeAnimationStartingHandler(handler: any): void;
                addAnimationFinishedHandler(handler: any): void;
                removeAnimationFinishedHandler(handler: any): void;
                getStep(): number;
                setStep(value: number): void;
                getScale(): PerfectWidgets.Model.BaseElements.IScale;
                getMinLimit(): PerfectWidgets.Model.BaseElements.SmartValue;
                setMinLimit(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                getMaxLimit(): PerfectWidgets.Model.BaseElements.SmartValue;
                setMaxLimit(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                getPosition(radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationInfo(): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                getHot(): boolean;
                getPressed(): boolean;
                getDragged(): boolean;
                getObject(name: string): Object;
                getRadius(point: PerfectWidgets.Framework.DataObjects.Vector): number;
                bindingEnabled(enabled: boolean): void;
                getAnimation(): PerfectWidgets.Model.Animation.AbstractAnimation;
                setAnimation(animation: PerfectWidgets.Model.Animation.AbstractAnimation): void;
                getAnimationState(): PerfectWidgets.Model.Animation.AnimationState;
                setAnimationState(state: PerfectWidgets.Model.Animation.AnimationState): void;
                configureAnimation(configurationObject: Object): void;
                onAnimationStarting(): boolean;
                onAnimationFinished(): void;
                onAnimationValueChanged(): void;
            }
            export class Slider extends PerfectWidgets.Model.BaseElements.SliderBase {
                getPosition(radius: number): PerfectWidgets.Framework.DataObjects.Vector;
                getTransformationInfo(): PerfectWidgets.Framework.Transformation.AbstractTransformation;
                cancelManipulationEvents(): void;
                constructor();
            }
            enum SmartValueKind {
                Auto = 0,
                Constant = 1,
                Percent = 2
            }
            export class SmartValue {
                getKind(): PerfectWidgets.Model.BaseElements.SmartValueKind;
                setKind(kind: PerfectWidgets.Model.BaseElements.SmartValueKind): void;
                getValue(): number;
                setValue(value: number): void;
                getAnimationValue(): number;
                setAnimationValue(value: number): void;
                static equals(v1: PerfectWidgets.Model.BaseElements.SmartValue, v2: PerfectWidgets.Model.BaseElements.SmartValue): boolean;
                static parse(obj: Object): PerfectWidgets.Model.BaseElements.SmartValue;
                constructor();
                _value: number;
                _kind: PerfectWidgets.Model.BaseElements.SmartValueKind;
                static auto: PerfectWidgets.Model.BaseElements.SmartValue;
            }
            export class Star extends PerfectWidgets.Model.BaseElements.Polygon {
                getInternalRadius(): number;
                setInternalRadius(internalRadius: number): void;
                constructor();
            }
            enum StringAlignment {
                Near = 0,
                Center = 1,
                Far = 2
            }
            export class TextItem {
                getText(): string;
                setText(text: string): void;
                getValue(): PerfectWidgets.Model.BaseElements.SmartValue;
                setValue(value: PerfectWidgets.Model.BaseElements.SmartValue): void;
                toString(): string;
                constructor();
            }
            enum SubTicksPosition {
                Near = 0,
                Center = 1,
                Far = 2
            }
            export class Ticks extends PerfectWidgets.Model.BaseElements.ScaleMarksBase {
                getLength(): number;
                setLength(value: number): void;
                getSubLength(): number;
                setSubLength(value: number): void;
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getSize(): number;
                constructor();
            }
            export class TruncatedEllipse extends PerfectWidgets.Model.BaseElements.ArcBase {
                getHitTest(point: PerfectWidgets.Framework.DataObjects.Vector): boolean;
                constructor();
            }
            export class ValueChangingEventArgs {
                getOldValue(): number;
                getNewValue(): number;
                getHandled(): boolean;
                setHandled(handled: boolean): void;
                setNewValue(newValue: number): void;
                constructor(newValue: number, oldValue: number);
            }
            export class ValueChangingHandler {
                invoke(sender: Object, args: PerfectWidgets.Model.BaseElements.ValueChangingEventArgs): void;
                constructor(object: Object, method: any);
            }
            export class NeedRepaintChangedEventArgs {
                constructor(repaintType: boolean);
                repaintType: boolean;
            }
            export class ElementEventArgs {
                constructor(element: PerfectWidgets.Model.BaseElements.WidgetElement);
                element: PerfectWidgets.Model.BaseElements.WidgetElement;
            }
            export class ElementsCollection {
                add_ElementAdded(value: any): void;
                remove_ElementAdded(value: any): void;
                add_ElementRemoved(value: any): void;
                remove_ElementRemoved(value: any): void;
                remove(element: PerfectWidgets.Model.BaseElements.WidgetElement): void;
                add(element: PerfectWidgets.Model.BaseElements.WidgetElement, parent: PerfectWidgets.Model.BaseElements.Composite): void;
                insert(position: number, element: PerfectWidgets.Model.BaseElements.WidgetElement): void;
                contains(value: PerfectWidgets.Model.BaseElements.WidgetElement): boolean;
                get_Item(index: number): PerfectWidgets.Model.BaseElements.WidgetElement;
                count(): number;
                constructor();
                Item: PerfectWidgets.Model.BaseElements.WidgetElement;
            }
            export class Instrument extends PerfectWidgets.Model.BaseElements.Composite {
                getPainter(): PerfectWidgets.Model.Drawing.IPainter;
                endInitializing(): void;
                initializingIsFinished(): boolean;
                static createEmptyInstrument(): PerfectWidgets.Model.BaseElements.Instrument;
                getUniqueClassName(): string;
                setUniqueClassName(UniqueClassNameValue: string): void;
                getBounds(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getFullName(): string;
                getEnable(): boolean;
                setEnable(enabled: boolean): void;
                getIsFocused(): boolean;
                setIsFocused(IsFocusedValue: boolean): void;
                getSize(): PerfectWidgets.Framework.DataObjects.Vector;
                setSize(SizeValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                getBevel(): PerfectWidgets.Model.BaseElements.Bevel;
                setBevel(BevelValue: PerfectWidgets.Model.BaseElements.Bevel): void;
                getStubBevel(): PerfectWidgets.Model.BaseElements.StandardBevel;
                setStubBevel(stubBevelValue: PerfectWidgets.Model.BaseElements.StandardBevel): void;
                getShadowFill(): PerfectWidgets.Framework.Drawing.Fill;
                setShadowFill(shadowFillValue: PerfectWidgets.Framework.Drawing.Fill): void;
                getShadowDX(): number;
                setShadowDX(shadowDXValue: number): void;
                getShadowDY(): number;
                setShadowDY(myVarValue: number): void;
                getElementAt(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Model.BaseElements.WidgetElement;
                onPaint(painter: PerfectWidgets.Model.Drawing.IPainter, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke): void;
                getStyles(): PerfectWidgets.Framework.Styles.Style[];
                setStyles(stylesValue: PerfectWidgets.Framework.Styles.Style[]): void;
                getStyleCollection(): PerfectWidgets.Framework.Styles.StyleCollection;
                setStyleCollection(styleCollectionValue: PerfectWidgets.Framework.Styles.StyleCollection): void;
                getStyleByName(name: string): PerfectWidgets.Framework.Styles.Style;
                getBoundedBox(): PerfectWidgets.Framework.DataObjects.VectorRectangle;
                getToolTipsEnabled(): boolean;
                constructor();
            }
            export class Parameter {
                getName(): string;
                setName(NameValue: string): void;
                getElementName(): string;
                setElementName(ElementNameValue: string): void;
                getPropertyName(): string;
                setPropertyName(PropertyNameValue: string): void;
                constructor();
            }
            export class ParameterCollection {
                remove(parameter: PerfectWidgets.Model.BaseElements.Parameter): void;
                add(parameter: PerfectWidgets.Model.BaseElements.Parameter): void;
                insert(position: number, parameter: PerfectWidgets.Model.BaseElements.Parameter): void;
                contains(parameter: PerfectWidgets.Model.BaseElements.Parameter): boolean;
                get_Item(ParameterName: string): PerfectWidgets.Model.BaseElements.Parameter;
                count(): number;
                constructor();
                Item: PerfectWidgets.Model.BaseElements.Parameter;
            }
        }
        export module Drawing {
            export class DigitPainter {
                prepareSegmentsIfNeeded(): void;
                formColon(active: PerfectWidgets.Framework.Drawing.GraphicsPath, shift: PerfectWidgets.Framework.DataObjects.Vector): void;
                formDot(active: PerfectWidgets.Framework.Drawing.GraphicsPath, shift: PerfectWidgets.Framework.DataObjects.Vector): void;
                formSegments(active: PerfectWidgets.Framework.Drawing.GraphicsPath, inactive: PerfectWidgets.Framework.Drawing.GraphicsPath, segmentType: PerfectWidgets.Model.BaseElements.SegmentType, shift: PerfectWidgets.Framework.DataObjects.Vector): void;
                clearRegions(): void;
                constructor(digits: PerfectWidgets.Model.BaseElements.Digits);
            }
            export class GeneralDigitStyle extends PerfectWidgets.Model.Drawing.DigitPainter {
                prepareSegmentsIfNeeded(): void;
                formColon(active: PerfectWidgets.Framework.Drawing.GraphicsPath, shift: PerfectWidgets.Framework.DataObjects.Vector): void;
                formDot(active: PerfectWidgets.Framework.Drawing.GraphicsPath, shift: PerfectWidgets.Framework.DataObjects.Vector): void;
                formSegments(active: PerfectWidgets.Framework.Drawing.GraphicsPath, inactive: PerfectWidgets.Framework.Drawing.GraphicsPath, segmentType: PerfectWidgets.Model.BaseElements.SegmentType, shift: PerfectWidgets.Framework.DataObjects.Vector): void;
                constructor(digits: PerfectWidgets.Model.BaseElements.Digits);
            }
            export class ValuePathPair {
                get_Value(): number;
                set_Value(value: number): void;
                get_Path(): PerfectWidgets.Framework.Drawing.GraphicsPath;
                set_Path(value: PerfectWidgets.Framework.Drawing.GraphicsPath): void;
                constructor(value: number, path: PerfectWidgets.Framework.Drawing.GraphicsPath);
                Value: number;
                Path: PerfectWidgets.Framework.Drawing.GraphicsPath;
            }
            export interface IPainter {
                drawArc(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, startAngle: number, sweepAngle: number): void;
                drawCircle(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, center: PerfectWidgets.Framework.DataObjects.Vector, radius: number): void;
                drawEllipse(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
                drawGraphicsPath(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, path: PerfectWidgets.Framework.Drawing.GraphicsPath): void;
                drawRectangle(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, rectangle: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number): void;
                drawRoundedRectangle(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, vr: PerfectWidgets.Framework.DataObjects.VectorRectangle, rx: number, ry: number): void;
                drawPolygon(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, points: PerfectWidgets.Framework.DataObjects.Vector[]): void;
                drawText(text: string, font: PerfectWidgets.Framework.Drawing.Font, fill: PerfectWidgets.Framework.Drawing.Fill, position: PerfectWidgets.Framework.DataObjects.Vector, angle: number, alignment: PerfectWidgets.Model.BaseElements.StringAlignment): void;
                drawAlignedText(text: string, font: PerfectWidgets.Framework.Drawing.Font, fill: PerfectWidgets.Framework.Drawing.Fill, box: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number, alignment: PerfectWidgets.Framework.Drawing.ContentAlignment): void;
                drawImage(image: PerfectWidgets.Framework.Drawing.Image, destRect: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
                drawLine(stroke: PerfectWidgets.Framework.Drawing.Stroke, points: PerfectWidgets.Framework.DataObjects.Vector[]): void;
                clearGroup(): void;
                createGroup(): void;
                endGroup(): void;
                startTransformation(m: PerfectWidgets.Framework.DataObjects.Matrix): void;
                endTransformation(): void;
                startClip(clipArea: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
                endClip(): void;
                setSmoothMode(smooth: boolean): void;
                reset(): void;
                rescale(size: PerfectWidgets.Framework.DataObjects.Vector, viewBox: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
                setContext(element: PerfectWidgets.Model.BaseElements.WidgetElement): void;
            }
        }
        export module Manipulator {
            export class ManipulationEventHandler {
                invoke(sender: Object, e: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                constructor(object: Object, method: any);
            }
            export class ManipulationArguments {
                getTimestamp(): number;
                getManipulationOrigin(): PerfectWidgets.Framework.DataObjects.Vector;
                getDeltaManipulation(): PerfectWidgets.Model.Manipulator.ManipulationDelta;
                view(): PerfectWidgets.Model.View.AbstractView;
                isInDiv(): boolean;
                constructor(manipulationOrigin: PerfectWidgets.Framework.DataObjects.Vector, deltaManipulation: PerfectWidgets.Model.Manipulator.ManipulationDelta, view?: PerfectWidgets.Model.View.AbstractView, isInDiv?: boolean);
            }
            export class ManipulationDelta {
                getRotation(): number;
                getScale(): PerfectWidgets.Framework.DataObjects.Vector;
                getTranslation(): PerfectWidgets.Framework.DataObjects.Vector;
                toString(): string;
                constructor(rotation: number, scale: PerfectWidgets.Framework.DataObjects.Vector, translation?: PerfectWidgets.Framework.DataObjects.Vector);
            }
        }
        export module Strategy {
            export class BrowserStrategy {
                static getInstance(): PerfectWidgets.Model.Strategy.BrowserStrategy;
                postCreateGroup(painter: PerfectWidgets.Model.Drawing.IPainter): void;
            }
        }
        export module View {
            export class Tool {
                onPointerOut(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onPointerOver(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onManipulationStarted(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onManipulationEnded(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onPointerMove(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onPointerLeave(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onPointerEnter(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                onDeltaChange(manipulationArguments: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
                constructor();
            }
            export class AbstractView {
                getScale(): PerfectWidgets.Framework.DataObjects.Vector;
                setScale(ScaleValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                getOrigin(): PerfectWidgets.Framework.DataObjects.Vector;
                setOrigin(OriginValue: PerfectWidgets.Framework.DataObjects.Vector): void;
                changeZoom(center: PerfectWidgets.Framework.DataObjects.Vector, scale: PerfectWidgets.Framework.DataObjects.Vector): void;
                isReadyToPaint(): boolean;
                paint(painter: PerfectWidgets.Model.Drawing.IPainter): void;
                getElementAt(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Model.BaseElements.WidgetElement;
                toElement(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                toView(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
                getElement(): PerfectWidgets.Model.BaseElements.WidgetElement;
                constructor();
            }
            export class ViewManager {
                getTool(): PerfectWidgets.Model.View.Tool;
                setTool(ToolValue: PerfectWidgets.Model.View.Tool): void;
                getView(): PerfectWidgets.Model.View.AbstractView;
                setView(ViewValue: PerfectWidgets.Model.View.AbstractView): void;
                hitTest(x: number, y: number): boolean;
                constructor();
            }
        }
    }
    export module Serialization {
        enum CssClass {
            none = 0,
            background = 1,
            foreground = 2,
            needle = 3,
            ticks = 4,
            labels = 5
        }
        export class JSONParser {
            parse(jsonModel: Object, jsonParam: Object): PerfectWidgets.Model.BaseElements.Instrument;
            constructor();
        }
        export class PropertyTranslator {
            static translate(propertyName: string): string;
            constructor();
        }
    }
    export module View {
        export class ElementView extends PerfectWidgets.Model.View.AbstractView {
            getElement(): PerfectWidgets.Model.BaseElements.WidgetElement;
            changeZoom(center: PerfectWidgets.Framework.DataObjects.Vector, scale: PerfectWidgets.Framework.DataObjects.Vector): void;
            toElement(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
            toView(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Framework.DataObjects.Vector;
            getElementAt(point: PerfectWidgets.Framework.DataObjects.Vector): PerfectWidgets.Model.BaseElements.WidgetElement;
            isReadyToPaint(): boolean;
            paint(painter: PerfectWidgets.Model.Drawing.IPainter): void;
            constructor(element: PerfectWidgets.Model.BaseElements.WidgetElement);
        }
        export class PickTool extends PerfectWidgets.Model.View.Tool {
            onPointerOut(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            onPointerOver(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            onManipulationStarted(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            onManipulationEnded(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            onPointerMove(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            onPointerLeave(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            onPointerEnter(args: PerfectWidgets.Model.Manipulator.ManipulationArguments): void;
            constructor();
        }
    }
    export class Widget extends PerfectWidgets.Model.View.ViewManager {
        isInDiv(x: number, y: number): boolean;
        static writeLog(text: string): void;
        pointingDeviceEvent(e: any): void;
        getByName(name: string): PerfectWidgets.Model.BaseElements.WidgetElement;
        getInteractive(): boolean;
        setInteractive(interactive: boolean): void;
        dispose(): void;
        rescale(): void;
        constructor(id: string, jsonModel: Object, jsonParams?: Object, tool?: PerfectWidgets.Model.View.Tool, view?: PerfectWidgets.Model.View.AbstractView);
    }
    export module Drawing {
        export class SvgBuilder {
            createSvg(size: PerfectWidgets.Framework.DataObjects.Vector, viewBox: PerfectWidgets.Framework.DataObjects.VectorRectangle): Element;
            rescale(size: PerfectWidgets.Framework.DataObjects.Vector, viewBox: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
            getCurrentGroup(groupId: string): Element;
            startGroup(groupId: string, parent: Element, transformation: PerfectWidgets.Framework.Transformation.AbstractTransformation, isVisible: boolean): Element;
            writePolyline(points: PerfectWidgets.Framework.DataObjects.Vector[], stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writePolygon(points: PerfectWidgets.Framework.DataObjects.Vector[], fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writeRect(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writeRoundedRect(vr: PerfectWidgets.Framework.DataObjects.VectorRectangle, rx: number, ry: number, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writeArc(p1: PerfectWidgets.Framework.DataObjects.Vector, p2: PerfectWidgets.Framework.DataObjects.Vector, radii: PerfectWidgets.Framework.DataObjects.Vector, rotate: number, large: boolean, sweep: boolean, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writeCircle(center: PerfectWidgets.Framework.DataObjects.Vector, radius: number, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writeEllipse(center: PerfectWidgets.Framework.DataObjects.Vector, radii: PerfectWidgets.Framework.DataObjects.Vector, rotate: number, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writePie(p1: PerfectWidgets.Framework.DataObjects.Vector, p2: PerfectWidgets.Framework.DataObjects.Vector, radii: PerfectWidgets.Framework.DataObjects.Vector, rotate: number, large: boolean, sweep: boolean, center: PerfectWidgets.Framework.DataObjects.Vector, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            writeGraphicsPath(path: PerfectWidgets.Framework.Drawing.GraphicsPath, fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, guid: string, classNames: string[]): Element;
            setSmoothMode(smooth: boolean): Element;
            createTransformationGroup(m: PerfectWidgets.Framework.DataObjects.Matrix): Element;
            writeImage(image: PerfectWidgets.Framework.Drawing.Image, position: PerfectWidgets.Framework.DataObjects.Vector, size: PerfectWidgets.Framework.DataObjects.Vector, guid: string, classNames: string[]): Element;
            writeText(text: string, position: PerfectWidgets.Framework.DataObjects.Vector, rotate: number, font: PerfectWidgets.Framework.Drawing.Font, fill: PerfectWidgets.Framework.Drawing.Fill, alignment: PerfectWidgets.Model.BaseElements.StringAlignment, guid: string, classNames: string[]): Element;
            writeAlignedText(text: string, box: PerfectWidgets.Framework.DataObjects.VectorRectangle, rotate: number, font: PerfectWidgets.Framework.Drawing.Font, fill: PerfectWidgets.Framework.Drawing.Fill, alignment: PerfectWidgets.Framework.Drawing.ContentAlignment, guid: string, classNames: string[]): Element[];
            reset(): void;
            clip(rect: PerfectWidgets.Framework.DataObjects.VectorRectangle, parent: Element, guid: string, isVisible: boolean): Element;
            constructor(id: string);
        }
        export class SvgPainter {
            rescale(size: PerfectWidgets.Framework.DataObjects.Vector, viewBox: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
            drawPolygon(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, points: PerfectWidgets.Framework.DataObjects.Vector[]): void;
            drawRectangle(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, vr: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number): void;
            drawRoundedRectangle(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, vr: PerfectWidgets.Framework.DataObjects.VectorRectangle, rx: number, ry: number): void;
            drawArc(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, vr: PerfectWidgets.Framework.DataObjects.VectorRectangle, startAngle: number, sweepAngle: number): void;
            drawCircle(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, center: PerfectWidgets.Framework.DataObjects.Vector, radius: number): void;
            drawEllipse(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, vr: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
            drawGraphicsPath(fill: PerfectWidgets.Framework.Drawing.Fill, stroke: PerfectWidgets.Framework.Drawing.Stroke, path: PerfectWidgets.Framework.Drawing.GraphicsPath): void;
            drawLine(stroke: PerfectWidgets.Framework.Drawing.Stroke, points: PerfectWidgets.Framework.DataObjects.Vector[]): void;
            drawImage(image: PerfectWidgets.Framework.Drawing.Image, destRect: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
            drawText(text: string, font: PerfectWidgets.Framework.Drawing.Font, fill: PerfectWidgets.Framework.Drawing.Fill, position: PerfectWidgets.Framework.DataObjects.Vector, angle: number, alignment: PerfectWidgets.Model.BaseElements.StringAlignment): void;
            drawAlignedText(text: string, font: PerfectWidgets.Framework.Drawing.Font, fill: PerfectWidgets.Framework.Drawing.Fill, box: PerfectWidgets.Framework.DataObjects.VectorRectangle, angle: number, alignment: PerfectWidgets.Framework.Drawing.ContentAlignment): void;
            createGroup(): void;
            endGroup(): void;
            startClip(clipArea: PerfectWidgets.Framework.DataObjects.VectorRectangle): void;
            endClip(): void;
            startTransformation(m: PerfectWidgets.Framework.DataObjects.Matrix): void;
            endTransformation(): void;
            reset(): void;
            setSmoothMode(smooth: boolean): void;
            setContext(context: PerfectWidgets.Model.BaseElements.WidgetElement): void;
            clearGroup(): void;
            constructor(id: string, size: PerfectWidgets.Framework.DataObjects.Vector, viewBox?: PerfectWidgets.Framework.DataObjects.VectorRectangle);
        }
    }
}


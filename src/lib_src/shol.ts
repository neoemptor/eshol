
// export function arc(cx: number, cy: number, R: any, r: any, from: number, to: number, command: string): any {
//     var start: any = pointAtAngle(cx, cy, R, r, from),
//         end: any = pointAtAngle(cx, cy, R, r, to);
//     command = command || "M";
//     return <any>command + snap.format("{sx},{sy}A{R},{r},0,{big},{way},{tx},{ty}", {
//         sx: start.x,
//         sy: start.y,
// d        R: R,
//         r: r,
//         tx: end.x,
//         ty: end.y,
//         big: +(Math.abs(to - from) > 180),
//         way: +(from > to)
//     });
// }

// export function pointAtAngle(cx: number, cy: number, rx: number, ry: number, angle: number): any {
//     angle = snap.rad(angle);
//     return {
//         x: cx + rx * Math.cos(angle),
//         y: cy - ry * Math.sin(angle)
//     };
// }


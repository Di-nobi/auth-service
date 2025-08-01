"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = exports.Auth = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Auth = class Auth {
};
exports.Auth = Auth;
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true, trim: true }),
    __metadata("design:type", String)
], Auth.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Auth.prototype, "password", void 0);
exports.Auth = Auth = __decorate([
    (0, mongoose_1.Schema)()
], Auth);
exports.AuthSchema = mongoose_1.SchemaFactory.createForClass(Auth);
//# sourceMappingURL=auth.schema.js.map
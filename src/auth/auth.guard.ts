import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common"; 
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    @Inject()
    private readonly jwtService: JwtService;

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const autorization = this.extractTokenFromHeader(request);
        if (!autorization) throw new UnauthorizedException('Token not found');

        try {
            const payload = await this.jwtService.verifyAsync(autorization, {
                secret: process.env.SECRET_KEY,
            });
            request['sub'] = payload;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
        return true;
    }


    private extractTokenFromHeader(request: Request): string | undefined{
        const [type, token] = request.headers['authorization']?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}

import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

// Simulador de Middleware de Autenticação e Segurança (Regra 25)
const validateOwner = (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.headers['x-user-role']; // Simulação de leitura de Token JWT seguro
    
    if (userRole !== 'OWNER') {
        return res.status(403).json({ error: 'Acesso negado. Apenas o proprietário ARANDES possui privilégios nesta área.' });
    }
    next();
};

// Rotas Públicas do Aplicativo
app.post('/api/auth/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    res.json({ message: 'Login processado com sucesso!', token: 'JWT_TOKEN_MOCK' });
});

// Rota Segura e Protegida - Área do Criador / Moderação (Regra 20 e 22)
app.post('/api/admin/users/:id/suspend', validateOwner, (req: Request, res: Response) => {
    const { id } = req.params;
    const { duration, reason } = req.body;
    
    res.json({
        success: true,
        message: `Usuário ${id} punido com sucesso com ação de suspensão por ${duration}. Motivo: ${reason}`
    });
});

app.listen(3000, () => console.log('Backend do GLOBAL-BR ativo na porta 3000'));


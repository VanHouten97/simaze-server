import { Error } from '@interfaces';

export const database = {
    host: 'localhost',
    port: 27017,
    dbName: 'simaze',
    dbUser: 'fl0ppy',
    dbPass: 'zootek@2018'
};

export const secret = 'zootek2018@smz';

export function err(e: number, d?: any): Error {
    function model(n: number, d: any, internal?: any): Error {
        if (internal) {
            return { err: n, data: d, internal: internal };
        }
        return { err: n, data: d };
    }

    switch (e) {
        // Validação do usuário
        case 0x00000: return model(e, d);
        case 0xFFFFF: return model(e, { msg: "Erro interno." }, d);
        case 0x00001: return model(e, { msg: 'Nome completo deve estar entre 10-60 caracteres.' });
        case 0x00002: return model(e, { msg: 'Nome completo não pode conter numeros ou caracteres especiais.' });
        case 0x00003: return model(e, { msg: 'CPF deve conter 11 caracteres.' });
        case 0x00004: return model(e, { msg: 'CPF deve conter apenas numeros' });
        case 0x00005: return model(e, { msg: 'Email deve estar entre 5-40 caracteres.' });
        case 0x00006: return model(e, { msg: 'Email inválido.' });
        case 0x00007: return model(e, { msg: 'Nome de exibição deve conter entre 5-15 caracteres.' });
        case 0x00008: return model(e, { msg: 'Nome de exibição não pode conter numeros ou caracteres especiais.' });
        case 0x00009: return model(e, { msg: 'Data inválida.' });
        case 0x0000A: return model(e, { msg: 'Data de nascimento inválida.' });
        case 0x0000B: return model(e, { msg: 'Telefone inválido.' });
        case 0x0000C: return model(e, { msg: 'Cargo deve conter entre 5-15 caracteres.' });
        case 0x0000D: return model(e, { msg: 'Cargo não pode conter numeros ou caracteres especiais.' });
        case 0x0000E: return model(e, { msg: 'Admissão inválida.' });
        case 0x0000F: return model(e, { msg: 'Cargo deve conter entre 3-10 caracteres.' });
        case 0x00010: return model(e, { msg: 'Gênero deve ser M ou F.' });
        case 0x00011: return model(e, { msg: 'Estado deve conter 2 caracteres.' });
        case 0x00012: return model(e, { msg: 'Cidade deve conter entre 3-20 caracteres.' });
        case 0x00013: return model(e, { msg: 'Cidade não pode conter numeros ou caracteres especiais.' });
        case 0x00014: return model(e, { msg: 'Bairro deve conter entre 3-20 caracteres.' });
        case 0x00015: return model(e, { msg: 'Bairro não pode conter numeros ou caracteres especiais.' });
        case 0x00016: return model(e, { msg: 'Rua deve conter entre 3-40 caracteres.' });
        case 0x00017: return model(e, { msg: 'Rua não pode conter numeros ou caracteres especiais.' });
        case 0x00018: return model(e, { msg: 'Endereço n° deve conter menos de 12 caracteres.' });
        case 0x00019: return model(e, { msg: 'Endereço n° não pode conter numeros ou caracteres especiais.' });
        case 0x0001A: return model(e, { msg: 'CEP deve conter 8 caracteres.' });
        case 0x0001B: return model(e, { msg: 'CEP° deve ser numérico.' });
        case 0x0001C: return model(e, { msg: 'Senha muito grande.' });
        case 0x0001D: return model(e, { msg: 'Informações obrigatórias não preenchidas.' });
    }
}

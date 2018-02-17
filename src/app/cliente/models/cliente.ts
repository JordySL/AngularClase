export class Cliente {
    static mapFromResponse(data: any): Cliente {
        return new Cliente(data.id,
            data.nombre,
            data.apellidoPaterno,
            data.apellidoMaterno,
            data.direccion,
            data.total)
    }
    constructor(public id: number,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public direccion: string,
        public total: number){ 
    }
}

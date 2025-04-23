export default function LoginForm() {
    return (
        <div className="absolute top-20 right-4 md:right-8 bg-white p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
            <h2 className="text-gray-800 text-lg md:text-xl font-bold mb-4">Login</h2>
            <form className="flex flex-col space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span className="text-gray-600 text-sm">Lembrar-me</span>
                    </label>
                    <a href="#forgot-password" className="text-sm text-green-500 hover:underline">
                        Esqueceu a senha?
                    </a>
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
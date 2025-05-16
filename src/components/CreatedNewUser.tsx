import { useUserActions } from "../hooks/useUsers";
// components/CreateNewUser.tsx
export function CreateNewUser() {
	const { addUser } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;

    console.log({name,email,github})
    addUser({ name, email, github });
    form.reset(); // Limpiar el formulario después de enviar
  };


	return (
		<section className="p-6">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-lg font-medium text-gray-900 mb-2">
					Create New User
				</h2>
				<div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
					<div className="p-6 bg-white dark:bg-gray-800">
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label htmlFor="name" className="sr-only">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Name here"
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
								/>
							</div>

							<div>
								<label htmlFor="email" className="sr-only">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email here"
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
								/>
							</div>

							<div>
								<label htmlFor="github" className="sr-only">
									GitHub User
								</label>
								<input
									type="text"
									id="github"
									name="github"
									placeholder="GitHub User here"
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
								/>
							</div>

							<button
								type="submit"
								className="w-full mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
							>
								Create new User
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

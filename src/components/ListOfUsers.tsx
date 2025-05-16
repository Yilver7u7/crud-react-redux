import { useAppDispatch, useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUsers";
import { type UserId, deleteUserById } from "../store/users/slice";

export function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	/* const dispatch = useAppDispatch();
	Con el removeUser nos encargamos que la lógica
	quede en nuestro customHook en lugar de importar repetidamente
	useAppDispatch*/
	const { removeUser } = useUserActions()


	/*Esta forma genera mucho codigo repetivo */
	// const handleRemoveUser = (id: UserId) => {
	// 	dispatch(deleteUserById(id));
	// };

	return (
		<>
			<section className="p-6">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-lg font-medium text-gray-900 mb-2">User List</h2>
					<div
						className="w-8 h-8 mb-4 flex items-center
					justify-center rounded-full bg-gray-50 dark:bg-gray-800 transform 
					transition-transform duration-200 hover:scale-125 text-white text-sm
					hover:bg-blue-950"
						title="Total Users"
					>
						{users.length}
					</div>
					<div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
						<table className="min-w-full text-sm text-left dark:text-black-300">
							<thead className="bg-gray-50 dark:bg-gray-800">
								<tr className="text-amber-400 font-semibold">
									<th className="px-4 py-3">ID</th>
									<th className="px-4 py-3">Name</th>
									<th className="px-4 py-3">email</th>
									<th className="px-4 py-3">Acciones</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
								{users.map((user) => (
									<tr
										key={user.id}
										className="hover:bg-gray-700 hover:text-amber-400"
									>
										<td className="px-4 py-3 flex items-center">
											<img
												className="w-8 h-8 m-2 rounded-full"
												src={`https://unavatar.io/github/${user.github}`}
												alt={user.name}
											/>
											{user.id}
										</td>
										<td className="px-4 py-3">{user.name}</td>
										<td className="px-4 py-3">{user.email}</td>
										<td className="px-4 py-3">
											<div className="flex space-x-2">
												{/* Boton Editar */}
												<button type="button">
													{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-5 h-5"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
														/>
													</svg>
												</button>

												{/* Boton Eliminar */}
												<button
													onClick={() => removeUser(user.id)}
													type="button"
												>
													{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
													<svg
														aria-label="Remove element"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-5 h-5"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
														/>
													</svg>
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
}

import { useState } from "react";
import { useUserActions } from "../hooks/useUsers";
// biome-ignore lint/style/useImportType: <explanation>
import { UserWithId } from "../store/users/slice";

interface Props {
  user: UserWithId;
  onCancel: () => void;
}

export function EditUser({ user, onCancel }: Props) {
  const { editUser } = useUserActions();
  const [formData, setFormData] = useState<UserWithId>(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editUser(formData);
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Editar Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="block text-sm font-medium mb-1">Nombre:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          
          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
            <label className="block text-sm font-medium mb-1">GitHub:</label>
            <input
              type="text"
              value={formData.github}
              onChange={(e) => setFormData({...formData, github: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
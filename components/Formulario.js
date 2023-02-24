import { useForm } from "react-hook-form";
import { edadValidator } from "@/components/validators";
import styles from '@/styles/Contact.module.css'
import { redirects } from "@/next.config";

const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            direccion: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        redirects()
    }

    const incluirTelefono = watch('incluirTelefono');

    return (
      <div className={styles.contact}>
        <h2>Contacta conmigo</h2>
        {/* <p>Nombre: {watch('nombre')}</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" {...register('nombr', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p className={styles.error_tag}>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p className={styles.error_tag}>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" placeholder="Tu dirección" {...register('direccion', {
                    required: true
                })} />
                {errors.direccion?.type === 'required' && <p className={styles.error_tag}>El campo nombre es requerido</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Tu email" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p className={styles.error_tag}>El formato del email es incorrecto</p>}
            </div>
            <div>
                <label>Edad</label>
                <input type="text" placeholder="Tu edad" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p className={styles.error_tag}>La edad debe estar entre 18 y 65</p>}
            </div>
            <div>
                <label>País</label>
                <select {...register('pais')}>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                </select>
            </div>
            <div>
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div>
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <input type="submit" value="Enviar" />
        </form>
    </div>)
}

export default Formulario;
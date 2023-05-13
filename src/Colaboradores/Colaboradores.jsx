import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import { firestore, auth } from "../Backend/firebaseConfig";
import { Col, Row } from "react-bootstrap";
import Colaborador from "./Colaborador"

const Colaboradores = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [colaboradores, setColaboradores] = useState([]);
    const [user, setUser] = useState(null);
    const [newColaborador, setNewColaborador] = useState({
        nombre: "",
        descripcion: "",
        linkImagen: "",
    });

    useEffect(() => {
        const fetchColaboradoresData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, "Colaboradores"));
                const colaboradoresData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setColaboradores(colaboradoresData);
            } catch (error) {
                console.error("Error fetching Colaboradores data:", error);
            }
        };

        fetchColaboradoresData();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleToggle = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };

    const handleInputChange = (e) => {
        setNewColaborador({
            ...newColaborador,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddColaborador = async (e) => {
        e.preventDefault();

        if (user && user.email === "presidenciaunired@gmail.com") {
            try {
                const docRef = await addDoc(collection(firestore, "Colaboradores"), newColaborador);
                setColaboradores([...colaboradores, { id: docRef.id, ...newColaborador }]);
                setNewColaborador({ nombre: "", descripcion: "", linkImagen: "" });
            } catch (error) {
                console.error("Error añadiendo documento: ", error);
            }
        }
    };


    const handleDelete = async (id) => {
        if (user && user.email === "presidenciaunired@gmail.com") {
            try {
                await deleteDoc(doc(firestore, "Colaboradores", id));
                setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
            } catch (error) {
                console.error("Error borrando documento: ", error);
            }
        }
    };

    return (
        <div className="container mt-5 main-container-colab">
            <h1>Colaboradores</h1>
            {user && user.email === "presidenciaunired@gmail.com" && (
                <form onSubmit={handleAddColaborador} className="mt-4 mb-5">
                    <h2 className="mb-3">Añade un nuevo colaborador colaborador</h2>

                    <div className="mb-3 mt-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={newColaborador.nombre}
                            onChange={handleInputChange}
                            placeholder="Nombre"
                            required
                            className="form-control"
                            maxLength="70"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea
                            type="text"
                            name="descripcion"
                            value={newColaborador.descripcion}
                            onChange={handleInputChange}
                            placeholder="Descripción"
                            required
                            className="form-control"
                            rows="4"
                            maxLength="285"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Link de la imagen</label>
                        <input
                            type="text"
                            name="linkImagen"
                            value={newColaborador.linkImagen}
                            onChange={handleInputChange}
                            placeholder="Link de la imagen"
                            required
                            className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-success">Añadir</button>
                </form>
            )}

            <Row xs={1} sm={1} md={2} lg={3}>
                {colaboradores.map((card, index) => (
                    <Col className="mb-5" key={index}>
                        <Colaborador
                            {...card}
                            showBack={index === activeCard}
                            onToggle={() => handleToggle(index)}
                        />
                        {user && user.email === "presidenciaunired@gmail.com" && (
                            <button className="btn btn-danger mt-2" onClick={() => handleDelete(card.id)}>Borrar</button>
                        )}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Colaboradores;

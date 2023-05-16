
package com.portfolio.demian.Interface;


import com.portfolio.demian.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();

    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);

    //eliminar un objeto pero buscado por id
    public void deletePersona(Long id);

    //buscar persona x id
    public Persona findPersona(Long id);

}

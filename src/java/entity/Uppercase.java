/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Marcel
 */
@Entity
@Table(name = "uppercase")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Uppercase.findAll", query = "SELECT u FROM Uppercase u"),
    @NamedQuery(name = "Uppercase.findByIduppercase", query = "SELECT u FROM Uppercase u WHERE u.iduppercase = :iduppercase"),
    @NamedQuery(name = "Uppercase.findByContent", query = "SELECT u FROM Uppercase u WHERE u.content = :content")})
public class Uppercase implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "iduppercase")
    private Integer iduppercase;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "content")
    private String content;

    public Uppercase() {
    }

    public Uppercase(Integer iduppercase) {
        this.iduppercase = iduppercase;
    }

    public Uppercase(Integer iduppercase, String content) {
        this.iduppercase = iduppercase;
        this.content = content;
    }

    public Integer getIduppercase() {
        return iduppercase;
    }

    public void setIduppercase(Integer iduppercase) {
        this.iduppercase = iduppercase;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (iduppercase != null ? iduppercase.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Uppercase)) {
            return false;
        }
        Uppercase other = (Uppercase) object;
        if ((this.iduppercase == null && other.iduppercase != null) || (this.iduppercase != null && !this.iduppercase.equals(other.iduppercase))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Uppercase[ iduppercase=" + iduppercase + " ]";
    }
    
}

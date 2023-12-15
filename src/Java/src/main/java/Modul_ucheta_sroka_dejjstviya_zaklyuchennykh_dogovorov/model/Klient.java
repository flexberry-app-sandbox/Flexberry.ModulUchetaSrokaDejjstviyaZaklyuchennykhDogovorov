package Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "idКлинета")
    private Integer idклинета;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "НомерТелефона")
    private String номертелефона;

    @Column(name = "НаимОрганизации")
    private String наиморганизации;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getidКлинета() {
      return idклинета;
    }

    public void setidКлинета(Integer idклинета) {
      this.idклинета = idклинета;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(String номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getНаимОрганизации() {
      return наиморганизации;
    }

    public void setНаимОрганизации(String наиморганизации) {
      this.наиморганизации = наиморганизации;
    }


}
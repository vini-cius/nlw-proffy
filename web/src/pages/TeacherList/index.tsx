import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form id="search-teachers">
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Matemática', label: 'Matemática'},
            ]}
          />

          <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda'},
              { value: '2', label: 'Terça'},
              { value: '3', label: 'Quarta'},
              { value: '4', label: 'Quinta'},
              { value: '5', label: 'Sexta'},
              { value: '6', label: 'Sábado'},
            ]}
          />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
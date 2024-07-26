import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CafeTable from '../components/CafeTable';
import { fetchCafes, deleteCafe } from '../redux/actions/cafeActions';
import { useHistory } from 'react-router-dom';

const CafePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cafes = useSelector(state => state.cafes.cafes);

  useEffect(() => {
    dispatch(fetchCafes());
  }, [dispatch]);

  const handleEdit = id => {
    history.push(`/edit-cafe/${id}`);
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this cafe?')) {
      dispatch(deleteCafe(id));
    }
  };

  return (
    <div>
      <h1>Cafes</h1>
      <button onClick={() => history.push('/add-cafe')}>Add New Cafe</button>
      <CafeTable cafes={cafes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default CafePage;

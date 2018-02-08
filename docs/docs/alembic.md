When exporting an alembic file for use in maya. Make sure to have at least 2 levels of heirarchy in the primitive path attribute. Otherwise maya will not correctly import the geometry. For example,

`/root/object_name` vs just `object_name`

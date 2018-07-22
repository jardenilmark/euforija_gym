import createServices from './createService';

const setupStaffService = (db) => {
  return () => {
    const app = this;
    const service = createServices(app, db, 'staff');

    service.hooks({
      before: {
        create: [],
        update: [],
        remove: [],
      }
    })
  };
}

export default setupStaffService;
import { describe, expect, test } from '@jest/globals';
import { doc, getDocs, setDoc } from 'firebase/firestore';
import { DeleteMany } from '../../src/providers/commands';
import { MakeMockClient } from './utils/test-helpers';

describe('api methods', () => {
  test('FireClient delete doc', async () => {
    const client = await MakeMockClient();
    const docIds = ['test123', 'test22222', 'asdads'];
    const collName = 'deleteables';
    const collection = client.fireWrapper.dbGetCollection(collName);
    await Promise.all(
      docIds.map((id) => setDoc(doc(collection, id), { title: 'ee' }))
    );

    await DeleteMany(collName, { ids: docIds.slice(1) }, client);
    const res = await getDocs(collection);
    expect(res.docs.length).toBe(1);
  }, 100000);
});

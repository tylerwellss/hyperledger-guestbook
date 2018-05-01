/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sign the guestbook
 * @param {org.guestbook.Sign} sign
 * @transaction
 */

function Sign(tx) {
    var buf = new Uint16Array(1);
    window.crypto.getRandomValues(buf);
    var entryId = buf[0].toString();
    var factory = getFactory();
	return getAssetRegistry('org.guestbook.Entry')
  	  .then(function(EntryRegistry){
        var newEntry = factory.newResource('org.guestbook', 'Entry', entryId);
        newEntry.name = tx.name;
        newEntry.message = tx.message;
        newEntry.entryId = entryId;
        newEntry.date = new Date();
        return EntryRegistry.add(newEntry)
      })
}
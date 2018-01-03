/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule OnyxWebSocketEvent
 */

 //  Modified by Adam Clarke on 22/02/2017.
 //  Copyright © 2017 ThusFresh, Inc. All rights reserved.

'use strict';

/**
 * Event object passed to the `onopen`, `onclose`, `onmessage`, `onerror`
 * callbacks of `WebSocket`.
 *
 * The `type` property is "open", "close", "message", "error" respectively.
 *
 * In case of "message", the `data` property contains the incoming data.
 */
class OnyxWebSocketEvent {
  constructor(type, eventInitDict) {
    this.type = type.toString();
    Object.assign(this, eventInitDict);
  }
}

module.exports = OnyxWebSocketEvent;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 * <p>
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.imed;

import javax.annotation.Nullable;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Picture;
import android.net.Uri;
import android.os.Build;
import android.text.TextUtils;
import android.view.ActionMode;
import android.view.Menu;
import android.view.MenuItem;
import android.view.ViewGroup.LayoutParams;
import android.webkit.ConsoleMessage;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.CookieManager;

import com.facebook.common.logging.FLog;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.ContentSizeChangeEvent;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.webview.ReactWebViewManager;
import com.facebook.react.views.webview.WebViewConfig;
import com.facebook.react.views.webview.events.TopLoadingErrorEvent;
import com.facebook.react.views.webview.events.TopLoadingFinishEvent;
import com.facebook.react.views.webview.events.TopLoadingStartEvent;
import com.facebook.react.views.webview.events.TopMessageEvent;

import org.json.JSONObject;
import org.json.JSONException;

/**
 * Manages instances of {@link WebView}
 * <p>
 * Can accept following commands:
 * - GO_BACK
 * - GO_FORWARD
 * - RELOAD
 * <p>
 * {@link WebView} instances could emit following direct events:
 * - topLoadingFinish
 * - topLoadingStart
 * - topLoadingError
 * <p>
 * Each event will carry the following properties:
 * - target - view's react tag
 * - url - url set for the webview
 * - loading - whether webview is in a loading state
 * - title - title of the current page
 * - canGoBack - boolean, whether there is anything on a history stack to go back
 * - canGoForward - boolean, whether it is possible to request GO_FORWARD command
 */
@ReactModule(name = MVWWebViewManager.REACT_CLASS)
public class MVWWebViewManager extends ReactWebViewManager {

    protected static final String REACT_CLASS = "MVWWebView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    protected ReactWebView createReactWebViewInstance(ThemedReactContext reactContext) {
        return new MVWWebView(reactContext);
    }

    static protected class MVWWebView extends ReactWebView {

        static String TAG = "MVWWebView";

        ActionMode mActionMode;

        List<String> mActionList = new ArrayList<String>() {{
            add("Item1");
            add("Item2");
            add("APIWeb");
        }};

        public MVWWebView(ThemedReactContext reactContext) {
            super(reactContext);
        }

        /**
         * 处理item，处理点击
         *
         * @param actionMode
         */
        private ActionMode resolveActionMode(ActionMode actionMode) {
            if (actionMode != null) {
                final Menu menu = actionMode.getMenu();
                mActionMode = actionMode;
                menu.clear();
                for (int i = 0; i < mActionList.size(); i++) {
                    menu.add(mActionList.get(i));
                }
                for (int i = 0; i < menu.size(); i++) {
                    MenuItem menuItem = menu.getItem(i);
                    menuItem.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
                        @Override
                        public boolean onMenuItemClick(MenuItem menuItem) {
                            getSelectedData((String) menuItem.getTitle());
                            releaseAction();
                            return true;
                        }
                    });
                }
            }
            mActionMode = actionMode;
            return actionMode;
        }

        @Override
        public ActionMode startActionMode(ActionMode.Callback callback) {
            ActionMode actionMode = super.startActionMode(callback);
            return resolveActionMode(actionMode);
        }

        @Override
        public ActionMode startActionMode(ActionMode.Callback callback, int type) {
            ActionMode actionMode = super.startActionMode(callback, type);
            return resolveActionMode(actionMode);
        }

        private void releaseAction() {
            if (mActionMode != null) {
                mActionMode.finish();
                mActionMode = null;
            }
        }

        /**
         * 点击的时候，获取网页中选择的文本，回掉到原生中的js接口
         *
         * @param title 传入点击的item文本，一起通过js返回给原生接口
         */
        private void getSelectedData(String title) {

            String js = "(function getSelectedText() {" +
                    "var txt;" +
                    "var title = \"" + title + "\";" +
                    "if (window.getSelection) {" +
                    "txt = window.getSelection().toString();" +
                    "} else if (window.document.getSelection) {" +
                    "txt = window.document.getSelection().toString();" +
                    "} else if (window.document.selection) {" +
                    "txt = window.document.selection.createRange().text;" +
                    "}" +
                    "JSInterface.callback(txt,title);" +
                    "})()";
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                evaluateJavascript("javascript:" + js, null);
            } else {
                loadUrl("javascript:" + js);
            }
        }

        /**
         * 设置弹出action列表
         *
         * @param actionList
         */
        public void setActionList(List<String> actionList) {
            mActionList = actionList;
        }

        /**
         * 隐藏消失Action
         */
        public void dismissAction() {
            releaseAction();
        }
    }
}

Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter=function(a){Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.initializeBase(this,[a])};Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.prototype={checkState:function(){return!Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.callBaseMethod(this,"checkState")?false:this._designPanel._textAlignState("center")},callMethod:function(){if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.callBaseMethod(this,"callMethod"))return false;this._designPanel._execCommand("JustifyCenter")}};Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter",Sys.Extended.UI.HTMLEditor.ToolbarButton.EditorToggleButton);